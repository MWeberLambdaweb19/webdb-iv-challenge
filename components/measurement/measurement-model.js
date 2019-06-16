const db = require ('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('ingredient_measurement');
}

function findById(id) {
    return db('ingredient_measurement').where({id}).first();
}

function add(measurement) {
    return db('ingredient_measurement')
    .insert(measurement)
    .then(ids => {
        const [id] = ids;
        return db('ingredient_measurement')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('ingredient_measurement')
    .where({id})
    .update(changes)
    .then(() => {
        return db('ingredient_measurement')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('ingredient_measurement')
    .where({id})
    .delete();
}