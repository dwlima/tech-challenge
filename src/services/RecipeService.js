const axios = require('axios');
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
        link: href,
    };
};

module.exports = {

    async getRecipes(ingredients) {
        const url = `${PUPPY_API_URL}?i=${ingredients}`;
      
        try {
            const result = await axios.get(url);

            const { results } = result.data;
            const recipes = results.map(formatRecipes);

            return(recipes);

        } catch (err) {
            const message = 'Não foi possível acessar o site.';
            const dependency = 'Recipe Puppy';
            throw new ExternalError(message, dependency);
        }
    }
}
