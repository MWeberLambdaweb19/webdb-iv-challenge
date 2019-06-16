const router = require('express').Router();

const ring = require('./ri-model.js');

router.get('/', (req, res) => {
    ring.find()
    .then(recipe => {
        res.status(200).json(recipe)
    })
    .catch(err => {
        res.status(500).json(recipe)
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    ring.findById(id)
    .then(recipe => {
        if (recipe) {
        res.status(200).json(recipe);
        } else {
        res.status(404).json({message: "That recipe does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    const newRecipe = req.body
    ring.add(newRecipe)
    .then(recipe => {
        res.status(201).json(recipe)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body
    const {id} = req.params
    ring.update(id, changes)
    .then(recipe => {
        if (recipe) {
            res.status(201).json(recipe)
        } else {
            res.status(404).json({message: "This recipe does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params
    ring.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This recipe has been removed from the database"})
        } else {
            res.status(404).json({message: "This recipe does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;