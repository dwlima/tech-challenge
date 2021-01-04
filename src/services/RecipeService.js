const axios = require('axios');
const GiphyService = require('../services/GiphyService');
const ExternalError = require('../_helpers/ExternalError');

const formatRecipes = (recipe) => {
    let { href, title, ingredients } = recipe;

    ingredients = ingredients
        .split(',')
        .map((ingredient) => ingredient.trim())
        .sort();

    return {
        title,
        ingredients,
        link: href
    };
};


const getRecipesFromApi = async (ingredients) => {
    const url = `${PUPPY_API_URL}?i=${ingredients}`;
  
    try {
        const result = await axios.get(url);
        const { results } = result.data;
        const recipes = results.map(formatRecipes);

        return recipes;

    } catch (err) {
        const message = 'Não foi possível acessar o site.';
        const dependency = 'Recipe Puppy';
        throw new ExternalError(message, dependency);
    }
};


module.exports = {
    
    async getRecipes(ingredients) {

        const recipes = await getRecipesFromApi(ingredients);

        try {
            
            const promises = recipes.map((recipe) => GiphyService.getGif(recipe.title));
            const gifs = await Promise.all(promises);
            recipes.forEach((recipe, i) => {
                recipe.gif = gifs[i];
            });
            
            return {
                keywords: ingredients,
                recipes,
            };

        } catch (err) {
            console.log(err);
            const message = 'Não foi possível acessar a API para gerar o gif.';
            const dependency = 'Giphy';
            throw new ExternalError(message, dependency);
        }
    }
}
