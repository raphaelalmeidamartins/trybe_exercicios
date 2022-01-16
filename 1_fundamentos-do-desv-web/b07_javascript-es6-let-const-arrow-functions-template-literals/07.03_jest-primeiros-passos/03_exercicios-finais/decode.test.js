const decode = require('./decode');

describe('Exercício 4 - função decode', () => {
  it('Verifica se é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  it('Verifica se retorna a string como esperado', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });
  it('Verifica se a string tem a mesma quantidade de caracteres', () => {
    expect('1,2,3,4,5'.length).toBe(decode('1,2,3,4,5').length);
  });
});
