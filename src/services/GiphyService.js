const { default: axios } = require('axios');
const querystring = require('querystring');
const ExternalError = require('../_helpers/ExternalError');

module.exports = {

  // eslint-disable-next-line consistent-return
  async getGif(title) {
    const params = {
      api_key: GIPHY_API_KEY,
      q: title,
      lang: 'en',
      limit: 1,
      rating: 'g',
    };

    const query = querystring.stringify(params);
    // eslint-disable-next-line no-undef
    const giphyUrl = `${GIPHY_API_URL}/search?${query}`;

    try {
      const result = await axios.get(giphyUrl);
      return (result.data.data[0].embed_url);
    } catch (err) {
      const message = 'Não foi possível acessar o site.';
      const dependency = 'GIPHY';
      throw new ExternalError(message, dependency);
    }
  },
};
