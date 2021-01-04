const { query } = require('express-validator');


module.exports = {

  queryValidator(req, res, next) {
    var error = message = false;


    if(!req.query.i) {
      error = true,
      message = 'Você precisa informar o campo i com os ingredientes para a busca';
    } else {
      var ingredients = req.query.i;
      var ingredientsArray = ingredients.split(',');

      if((ingredientsArray.length < 1) || (ingredientsArray.length > 3)){
        error = true;
        message = 'Você deve informar de 1 a 3 ingredientes separados por virgula no campo i';
      }
    }

    if(error){
      return res.json({error: 'true', message});
    } else {
      next();
    }

  }
}
