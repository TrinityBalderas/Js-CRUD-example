const errMsg = document.getElementById("errMesg")
const form = document.querySelector("form")
const list = document.getElementById("ol-list")
const deleteBtn = document.getElementsByTagName("button")

const baseURL = "http://localhost:4004"

const getList = () => {
    axios.get(`${baseURL}/api/name`)
    .then(({ data }) => {
        let name = data
        list.innerHTML = ''
        name.forEach(e => {
            let listHtml = makeItem(e)
            list.innerHTML += listHtml
        });
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
}

const createName = (body) => {
    axios.post(`${baseURL}/api/name`, body)
        .then(({ data }) => {
            let name = data
            list.innerHTML += makeItem(name)
        })
        .catch(displayError)
}

const displayError = (err) => {
    errMsg.innerHTML = `Error message`
}
const deleteName = (e, id) => {
    axios.delete(`${baseURL}/api/name/:${id}`)
    e.parentElement.remove()
}


const makeItem = (name) => {
    return `
    <li>
    <p>${name.firstName} ${name.lastName}</p>
    <button onclick="deleteName(this,${name.id})">Delete</button>
    </li>`
}
form.addEventListener('submit', submitHandler)
getList()