const searchEmployee = require('./searchEmployee');

describe('Exercício Bônus - função searchEmployee', () => {
  it('Verifica se a função foi declarada', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Verifica se a função retorna os dados como esperado', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });
  it('Verifica se a função retorna erro caso os parâmetros não sejam string', () => {
    expect(() => searchEmployee(3, 1)).toThrow();
    expect(() => searchEmployee(3, 1)).toThrowError(new Error('Os parâmetros precisam ser strings'));
  });
  it('Retornar erro caso o id não seja encontrado no banco', () => {
    expect(() => searchEmployee('1000-0', 'firstName')).toThrow();
    expect(() => searchEmployee('1000-0', 'firstName')).toThrowError(new Error('Profissional não encontrado, ID inválido'));
  });
  it('Retornar erro caso o detalhe não seja encontrado no banco', () => {
    expect(() => searchEmployee('8579-6', 'language')).toThrow();
    expect(() => searchEmployee('8579-6', 'language')).toThrowError(new Error('Detalhe não encontrado!'));
  });
});
