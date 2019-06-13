// Requiring knex to get access to the syntax
const knex = require('knex');

// Setting the configuration so everything is connected together
const knexConfig = require('../knexfile.js');

// Creating db constant to connect knex usage to its configuration file, to the development object

const db = knex(knexConfig.development);

// Kicks the db constant out of my house

module.exports = db;