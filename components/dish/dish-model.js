const db = require ('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('dish');
}

function findById(id) {
    return db('dish').where({id}).first();
}

function add(dish) {
    return db('dish')
    .insert(dish)
    .then(ids => {
        const [id] = ids;
        return db('dish')
        .where({id})
        .first();
    })
}

function update(id, changes) {
    return db('dish')
    .where({id})
    .update(changes)
    .then(() => {
        return db('dish')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('dish')
    .where({id})
    .delete();
}