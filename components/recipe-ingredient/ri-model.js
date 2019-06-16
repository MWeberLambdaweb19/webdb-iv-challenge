const db = require ('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('recipe_ingredient');
}

function findById(id) {
    return db('recipe_ingredient').where({id}).first();
}

function add(recipe_ingredient) {
    return db('recipe_ingredient')
    .insert(recipe_ingredient)
    .then(ids => {
        const [id] = ids;
        return db('recipe_ingredient')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('recipe_ingredient')
    .where({id})
    .update(changes)
    .then(() => {
        return db('recipe_ingredient')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('recipe_ingredient')
    .where({id})
    .delete();
}