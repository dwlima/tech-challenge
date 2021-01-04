const ExternalError = require('../_helpers/ExternalError');
const recipeService = require('../services/RecipeService');

module.exports = {

    async index(req, res, next) {
        /*
		const  { userid } = req.params;
        const items = await Address.find({user: userid }).sort('-name');
        */

        var items = {
            "keywords": ["onion", "tomato"],
            "recipes": [{
                "title": "Greek Omelet with Feta",
                "ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
                "link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
                "gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
            },{
                "title": "Guacamole Dip Recipe",
                "ingredients": ["avocado", "onions", "tomato"],
                "link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
                "gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
            }
            ]
        }

		return res.json(items);

    },

    async getRecipes(req, res, next) {

        try {

            const ing = req.query.i;
            const recipes = await recipeService.getRecipes(ing);

            return res.json(recipes);

        } catch(err) {
            console.log("error");
            console.log(err);
            if (err instanceof ExternalError) {
                res.status(502).json({ errors: [err] });
                return;
            } else {
                res.status(422).json(err);
            }         
        }
    }
};