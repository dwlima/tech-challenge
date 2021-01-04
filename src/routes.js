const express = require('express');
const RecipeController = require('./controllers/RecipeController');
const { queryValidator } = require('./_helpers/queryValidator');

const routes = new express.Router();

// call example: http://127.0.0.1/recipes/?i=onion,tomato
//http://localhost:3000/recipes/?i=onions,tomato
routes.get('/recipes', queryValidator, RecipeController.getRecipes);


module.exports = routes;