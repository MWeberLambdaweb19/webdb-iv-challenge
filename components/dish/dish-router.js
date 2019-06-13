const router = require('express').Router();

const dish = require('./dish-model.js');

router.get('/', (req, res) => {
    dish.find()
    .then(dish => {
        res.status(200).json(dish)
    })
    .catch(err => {
        res.status(500).json(dish)
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    dish.findById(id)
    .then(dish => {
        if (dish) {
        res.status(200).json(dish);
        } else {
        res.status(404).json({message: "That dish does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    const newDish = req.body
    dish.add(newDish)
    .then(dish => {
        res.status(201).json(dish)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body
    const {id} = req.params
    dish.update(id, changes)
    .then(dish => {
        if (dish) {
            res.status(201).json(dish)
        } else {
            res.status(404).json({message: "This dish does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params
    dish.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This dish has been removed from the database"})
        } else {
            res.status(404).json({message: "This dish does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;