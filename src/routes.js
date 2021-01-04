const express = require('express');
const RecipeController = require('./controllers/RecipeController');

const routes = new express.Router();

/*
routes.get('/', (req, res) => {
    return res.send(`Hello World!`);
});
*/

// call example: http://127.0.0.1/recipes/?i=onion,tomato
//http://localhost:3000/recipes/?i=onions,tomato
routes.get('/recipes', RecipeController.getRecipes);

module.exports = routes;