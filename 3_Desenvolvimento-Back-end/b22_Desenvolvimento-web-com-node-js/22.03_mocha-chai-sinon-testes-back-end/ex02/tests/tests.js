const writeFile = require('../writeFile');
const { expect } = require('chai');

describe('Testa a função writeFile', () => {
  describe('Escreve arquivo', () => {
    const output = writeFile('anyFile.txt', 'front-end é mais legal');

    it('Retorna uma string', () => {
      expect(output).to.be.a('string');
    });

    it('A string é \'ok\'', () => {
      expect(output).to.be.equal('ok');
    });
  });
});
