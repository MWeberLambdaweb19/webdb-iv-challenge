const db = require ('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('quantity');
}

function findById(id) {
    return db('quantity').where({id}).first();
}

function add(quantity) {
    return db('quantity')
    .insert(quantity)
    .then(ids => {
        const [id] = ids;
        return db('quantity')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('quantity')
    .where({id})
    .update(changes)
    .then(() => {
        return db('quantity')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('quantity')
    .where({id})
    .delete();
}