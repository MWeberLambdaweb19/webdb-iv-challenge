const router = require('express').Router();

const measurement = require('./measurement-model.js');

router.get('/', (req, res) => {
    measurement.find()
    .then(measurement => {
        res.status(200).json(measurement)
    })
    .catch(err => {
        res.status(500).json(measurement)
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    measurement.findById(id)
    .then(measurement => {
        if (measurement) {
        res.status(200).json(measurement);
        } else {
        res.status(404).json({message: "That measurement does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    const newMeasurement = req.body
    measurement.add(newMeasurement)
    .then(measurement => {
        res.status(201).json(measurement)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body
    const {id} = req.params
    measurement.update(id, changes)
    .then(measurement => {
        if (measurement) {
            res.status(201).json(measurement)
        } else {
            res.status(404).json({message: "This measurement does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params
    measurement.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: "This measurement has been removed from the database"})
        } else {
            res.status(404).json({message: "This measurement does not exist!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;