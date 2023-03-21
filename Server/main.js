const express = require("express");
const cors = require("cors");
const PERSON = require("./{} db.json")
let globalId = 3

const PORT = 4004;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('../index'))

app.get(`/api/name`, (req, res) => {
    res.status(200).send(PERSON)
})

app.get(`/api/name/:id`, (req, res) => {
    let index = PERSON.findIndex(elem => elem.id === +req.params.id)
    if(index === -1) {
        res.status(404).send("Name doesn't exist")
    }
    res.status(200).send(PERSON[index])
})

app.post('/api/name',(req, res) => {
    let  name = req.body 
        if(!validatePerson(name)){
            res.status(400).end()
            return
        } else {
        res.status(200).send(createName(name))
        }
})

app.put(`/api/name/:id`, (req, res) => {
    const name = req.body
    console.log("Name: ",name);
    let index = PERSON.findIndex(elem => elem.id === +req.params.id)
    // if(!validatePerson(name)){
    //     res.status(400).end()
    //     return
    // }
    PERSON.splice(index, 1)
    PERSON.push(name)
    console.log("Name: ",PERSON[index]);
    res.status(200).send(name)
})

app.patch(`/api/name/:id`, (req, res) => {
    const name = req.body
    let index = PERSON.findIndex(elem => elem.id === +req.params.id)
    if(index === -1){
        res.status(404).send("Name doesn exist")
    }
    if(name.firstName != null){
        PERSON[index].firstName = name.firstName
    }
    if(name.lastName != null){
        PERSON[index].lastName = name.firstName
    }
    res.status(200).send(name)
})

app.delete(`/api/name/:id`, (req, res) => {
    let index = PERSON.findIndex(elem => elem.id === +req.params.id)
    PERSON.splice(index, 1)
    res.status(200).send(PERSON)
})

const createName = (name) => {
    const newName = {
        id: globalId,
        firstName: name.firstName,
        lastName: name.lastName
    }
    PERSON.push(newName)
    globalId++
    return newName
}

function validatePerson(name){
    if(PERSON.some(e => e.name === name)){
        return false
    } else {
        return true
    }
}

app.listen(PORT, () => {
    console.log(`we are live....${PORT}`);
})