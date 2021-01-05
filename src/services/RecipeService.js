const axios = require('axios');
const GiphyService = require('./GiphyService');
const ExternalError = require('../_helpers/ExternalError');

const formatRecipes = (recipe) => {
  const { href, title } = recipe;
  let { ingredients } = recipe;

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

const getRecipesFromApi = async (ingredients) => {
  // eslint-disable-next-line no-undef
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

    if (recipes && recipes.length > 0) {
      try {
        const promises = recipes.map(async (rec, idx) => 
          rec.gif = await GiphyService.getGif(rec.title)
        );
        await Promise.all(promises);

        return {
          keywords: ingredients,
          recipes,
        };
      } catch (err) {
        const message = 'Não foi possível acessar a API para gerar o gif.';
        const dependency = 'Giphy';
        throw new ExternalError(message, dependency);
      }
    } else {
      return null;
    }
  },
};
