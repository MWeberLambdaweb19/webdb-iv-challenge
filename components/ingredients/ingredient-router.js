const router = require('express').Router();

const ingredient = require('./ingredient-model.js');

router.get('/', (req, res) => {
    ingredient.find()
    .then(ingredient => {
        res.status(200).json(ingredient)
    })
    .catch(err => {
        res.status(500).json(ingredient)
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    ingredient.findById(id)
    .then(ingredient => {
        if (ingredient) {
        res.status(200).json(ingredient);
        } else {
        res.status(404).json({message: "That ingredient does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    const newIngredient = req.body
    ingredient.add(newIngredient)
    .then(ingredient => {
        res.status(201).json(ingredient)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body
    const {id} = req.params
    ingredient.update(id, changes)
    .then(ingredient => {
        if (ingredient) {
            res.status(201).json(ingredient)
        } else {
            res.status(404).json({message: "This ingredient does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params
    ingredient.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This ingredient has been removed from the database"})
        } else {
            res.status(404).json({message: "This ingredient does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;