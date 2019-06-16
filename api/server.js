// Setting requirements for the server file
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Setting imports for the server file (Commenting out so nothing breaks... yet)

const dishRouter = require('../components/dish/dish-router.js');
const ingredientRouter = require('../components/ingredients/ingredient-router.js');
const measurementRouter = require('../components/measurement/measurement-router.js');
const quantityRouter = require('../components/quantity/quantity-router.js');
const recipeRouter = require('../components/recipe/recipe-router.js');
const recipeIngredientRouter = require('../components/recipe-ingredient/ri-router.js');

// Making the server constant 

const server = express();

// Making the server use our imports

server.use(helmet());
server.use(cors());
server.use(express.json());

// Making our routes for the server to make connections (commenting out so nothing breaks... yet)

server.use('/api/dish', dishRouter);
server.use('/api/ingredient', ingredientRouter);
server.use('/api/measurement', measurementRouter);
server.use('/api/quantity', quantityRouter);
server.use('/api/recipe', recipeRouter);
server.use('/api/recipe_ingredient', recipeIngredientRouter);

// Making sure this thing works initially
server.get('/', (req, res) => {
    res.status(200).json({message: "its_working_anakin_skywalker.jpeg"})
})

// Kicking this thing out of its file and into the world to get a job
module.exports = server;