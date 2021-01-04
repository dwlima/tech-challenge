const { default: axios } = require('axios');
const querystring = require('querystring');
const ExternalError = require('../_helpers/ExternalError');

module.exports = {

    async getGif(title) {
        const params = {
            api_key: GIPHY_API_KEY,
            q: title,
            lang: 'en',
            limit: 1,
            rating: 'g'
        };

        const query = querystring.stringify(params);
        const giphy_url = `${GIPHY_API_URL}/search?${query}`;
        
        try {
            const result = await axios.get(giphy_url);
            return (result.data.data[0].embed_url);

        } catch(err) {
            console.log("error");
            console.log(err);
            if (err instanceof ExternalError) {
                res.status(502).json({ errors: [err] });
                return;
            } else {
                res.status(400).json(err);
            }         
        }
    }
};