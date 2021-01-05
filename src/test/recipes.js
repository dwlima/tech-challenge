import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(chaiHttp);

const testApiRecipes = (ingredients) => {
  const url = `/recipes?i=${ingredients}`;
  return (chai.request(app).get(url));
};

describe('Recipes Search API', () => {
  it('Necessário informar pelo menos 1 ingrediente', async () => {
    const ingredients = '';

    const { status } = await testApiRecipes(ingredients);
    expect(status).to.be.equal(400);
  });

  it('Informar no máximo 3 ingredientes', async () => {
    const ingredients = 'tomato,onions,avocado,eggs';

    const { status } = await testApiRecipes(ingredients);
    expect(status).to.be.equal(400);
  });
  it('Busca de receitas de 1 a 3 ingredientes informados deve trazer uma listagem', async () => {
    const ingredients = 'tomato,onions';
    const { status, body } = await testApiRecipes(ingredients);

    expect(status).to.be.equal(200);
    expect(body).to.have.property('recipes').that.is.an('array');
  });

});
