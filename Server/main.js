const express = require("express");
const cors = require("cors");
const NAME = require("./{} db.json")
let globalId = 3

const PORT = 4004;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('../index'))

app.get(`/api/name`, (req, res) => {
    res.status(200).send(NAME)
})
app.get(`/api/name/:id`, (req, res) => {
    let index = NAME.findIndex(elem => elem.id === +req.params.id)
    if(index === -1) {
        res.status(404).send("Name doesn't exist")
    }
    res.status(200).send(NAME[index])
})
app.post(`/api/name`,(req, res) => {
    let  name = req.body 
    if(NAME.some(e => e.name === name)){
        res.status(400).end()
    } else {
        res.status(200).send(createName(name))
    }
})
app.put(`/api/name/:id`, (req, res) => {
    const name = req.body
    let index = NAME.findIndex(elem => elem.id === +req.params.id)
    if(index === -1){
        res.status(404).send("Name doesn exist")
    }
    if(name.id !== +req.params.id) {
        res.status(400).send("Id mismatch")
    }
    if(!name.firstName || !name.lastName){
        res.status(400).send("Incomplete data")
    }
    NAME.splice(index, 1)
    NAME.push(name)
    res.status(200).send(name)
})
app.patch(`/api/name/:id`, (req, res) => {
    const name = req.body
    let index = NAME.findIndex(elem => elem.id === +req.params.id)
    if(index === -1){
        res.status(404).send("Name doesn exist")
    }
    if(!name.firstName || !name.firstName){
        res.status(400).send("Incomplete data")
    }
    NAME.splice(index, 1)
    NAME.push(name)
    res.status(200).send(name)
})
app.delete(`/api/name/:id`, (req, res) => {
    let index = NAME.findIndex(elem => elem.id === +req.params.id)
    NAME.splice(index, 1)
    res.status(200).send(NAME)
})

const createName = (name) => {
    const newName = {
        id: globalId,
        firstName: name.firstName,
        lastName: name.lastName
    }
    NAME.push(newName)
    globalId++
}
app.listen(PORT, () => {
    console.log(`we are live....${PORT}`);
})