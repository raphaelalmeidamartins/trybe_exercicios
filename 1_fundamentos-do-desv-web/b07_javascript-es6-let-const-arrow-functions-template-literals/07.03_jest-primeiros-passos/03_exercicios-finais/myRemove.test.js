const myRemove = require('./myRemove');

describe('Exercício 2 - função myRemove', () => {
  it('Remove item do array como esperado', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
  });

  it('Não deve retornar o mesmo array', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
  });
  it('Remove item do array como esperado', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
  });
});