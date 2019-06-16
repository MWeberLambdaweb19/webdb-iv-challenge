const db = require ('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('ingredient');
}

function findById(id) {
    return db('ingredient').where({id}).first();
}

function add(ingredient) {
    return db('ingredient')
    .insert(ingredient)
    .then(ids => {
        const [id] = ids;
        return db('ingredient')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('ingredient')
    .where({id})
    .update(changes)
    .then(() => {
        return db('ingredient')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('ingredient')
    .where({id})
    .delete();
}