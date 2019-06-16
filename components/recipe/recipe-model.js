const db = require ('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('recipe');
}

function findById(id) {
    return db('recipe').where({id}).first();
}

function add(recipe) {
    return db('recipe')
    .insert(recipe)
    .then(ids => {
        const [id] = ids;
        return db('recipe')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('recipe')
    .where({id})
    .update(changes)
    .then(() => {
        return db('recipe')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('recipe')
    .where({id})
    .delete();
}