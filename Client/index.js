const errMsg = document.getElementById("errMesg")
const form = document.querySelector("form")
const list = document.getElementById("ol-list")
const deleteBtn = document.getElementsByTagName("button")

const baseURL = "http://localhost:4004"

let nameArr = new Array()

const getList = () => {
    axios.get(`${baseURL}/api/name`)
    .then(({ data }) => {
        nameArr = data
        displayArr()
    })
}
const submitHandler = (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#firstName")
    const lastName = document.querySelector("#lastName")
    let body = {
        firstName: firstName.value,
        lastName: lastName.value 
    }
    createName(body)
    firstName.value = ""
    lastName.value = ""
}
const createName = (body) => {
    axios.post(`${baseURL}/api/name`, body)
        .then(({ data }) => {
            console.log("blah", JSON.stringify(data.firstName));
            nameArr.push(data)
            displayArr()
        })
        .catch(displayError)
}

const displayError = (err) => {
    errMsg.innerText = err
}
const deleteName = (e, id) => {
    axios.delete(`${baseURL}/api/name/:${id}`)
    nameArr.splice(nameArr.findIndex(e => id === e.id), 1)
    displayArr()
}
const displayArr = () => {
    list.innerHTML = ""
    console.log("display", nameArr);
    nameArr.forEach(e => {
        list.innerHTML += makeItem(e)
    });
}
const editName = (e) => {
    alert("Work in progress =)")
}
const makeItem = (fullName) => {
    return `
    <li>
    <p>${fullName.firstName} ${fullName.lastName}</p>
    <button onclick="deleteName(this,${fullName.id})">Delete</button>
    <button onclick="editName(this, ${fullName.id})">Edit</button>
    </li>`
}
form.addEventListener('submit', submitHandler)
getList()