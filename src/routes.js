const express = require('express');
const RecipeController = require('./controllers/RecipeController');

const routes = new express.Router();

routes.get('/', (req, res) => {
    return res.send(`Hello World!`);
});

routes.get('/recipe', RecipeController.index);

module.exports = routes;