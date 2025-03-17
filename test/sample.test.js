const { expect } = require('chai');
const saluer = require('../src/index');

describe('Test du module saluer', () => {
  it('devrait retourner "Hello Webpack avec Babel !"', () => {
    expect(saluer()).to.equal("Hello Webpack avec Babel !");
  });
});
