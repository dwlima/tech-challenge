// const { query } = require('express-validator');

module.exports = {
  // eslint-disable-next-line consistent-return
  queryValidator(req, res, next) {
    let error = false;
    let message = '';

    if (!req.query.i) {
      error = true;
      message = 'Você precisa informar o campo i com os ingredientes para a busca';
    } else {
      const ingredients = req.query.i;
      const ingredientsArray = ingredients.split(',');

      if ((ingredientsArray.length < 1) || (ingredientsArray.length > 3)) {
        error = true;
        message = 'Você deve informar de 1 a 3 ingredientes separados por virgula no campo i';
      }
    }

    if (!error) {
      next();
    } else {
      return res.status(400).json({ error: 'true', message });
    }
  },
};
