const express = require('express');
const uniqid = require('uniqid');

const router = express.Router();

//put - modify using map
//delete - using filter
//single get using find

let items = [
    {
        name: 'ubaid',
        id: uniqid()
    },
    {
        name: 'kabir',
        id: uniqid()
    }
]

router.get('/user', (req, res) => {
    const singleGet = items.find((item) => {
        return item.id === req.body.id
    })
    console.log(singleGet, 'singleGet');
    res.json(singleGet)
})

router.get('/users', (req, res) => {
    res.json(items)
})

router.post('/users', (req, res) => {
    const newUser = [{ name: req.body.name, id: uniqid() }, ...items]
    items = newUser;
    res.json(items)
})

router.put('/users', (req, res) => {
    const updatedUser = items.map((item) => {
        return item.id === req.body.id ? { ...item, name: req.body.name } : item
    })
    items = updatedUser
    res.json(items)
})

router.delete('/users', (req, res) => {
    const removeUsers = items.filter((item) => {
        return item.id !== req.body.id
    })

    items = removeUsers
    res.json(items)
})

module.exports = router;
