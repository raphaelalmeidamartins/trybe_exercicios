const encode = require('./encode');

describe('Exercício 4 - função encode', () => {
  it('Verifica se é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Verifica se retorna a string como esperado', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  });
  it('Verifica se a string tem a mesma quantidade de caracteres', () => {
    expect('a,e,i,o,u'.length).toBe(encode('a,e,i,o,u').length);
  });
});
