const router = require('express').Router();

const quantity = require('./quantity-model.js');

router.get('/', (req, res) => {
    quantity.find()
    .then(quantity => {
        res.status(200).json(quantity)
    })
    .catch(err => {
        res.status(500).json(quantity)
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    quantity.findById(id)
    .then(quantity => {
        if (quantity) {
        res.status(200).json(quantity);
        } else {
        res.status(404).json({message: "That quantity does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    const newQuantity = req.body
    quantity.add(newQuantity)
    .then(quantity => {
        res.status(201).json(quantity)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body
    const {id} = req.params
    quantity.update(id, changes)
    .then(quantity => {
        if (quantity) {
            res.status(201).json(quantity)
        } else {
            res.status(404).json({message: "This quantity does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params
    quantity.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This quantity has been removed from the database"})
        } else {
            res.status(404).json({message: "This quantity does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;