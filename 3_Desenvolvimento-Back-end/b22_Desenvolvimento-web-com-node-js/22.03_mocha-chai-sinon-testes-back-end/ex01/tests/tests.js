const positiveOrNegative = require('../positiveOrNegative');
const { expect } = require('chai');

describe('Testa comportamento da função', () => {
  describe('Verifica retorno quando o número é positivo', () => {
    const msg = positiveOrNegative(1);

    it('Retorno deve ser uma string', () => {
      expect(msg).to.be.a('string');
    });

    it('Retorno deve ser \'positivo\'', () => {
      expect(msg).to.be.equal('positivo');
    });
  });

  describe('Verifica retorno quando o número é negativo', () => {
    const msg = positiveOrNegative(-1);

    it('Retorno deve ser uma string', () => {
      expect(msg).to.be.a('string');
    });

    it('Retorno deve ser \'positivo\'', () => {
      expect(msg).to.be.equal('negativo');
    });
  });

  describe('Verifica retorno quando o número é neutro', () => {
    const msg = positiveOrNegative(0);

    it('Retorno deve ser uma string', () => {
      expect(msg).to.be.a('string');
    });

    it('Retorno deve ser \'positivo\'', () => {
      expect(msg).to.be.equal('neutro');
    });
  })
});