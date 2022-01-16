const sum = require('./sum');

describe('Exercício 1 - função sum', () => {
  it('5 + 4 = 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('Recebe mensagem de erro, caso os valores não sejam númericos', () => {
    expect(() => sum('4',5)).toThrow();
    expect(() => sum('4',5)).toThrowError(new Error('parameters must be numbers'));
  });
});
