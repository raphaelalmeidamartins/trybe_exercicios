const myFizzBuzz = require("./myFizzBuzz");

describe('Exercício 3 - função myFizzBuzz', () => {
  it('Se o número for divisível por 3 e 5, a função deve retornar "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz')
  });
  it('Se o número for divísivel apenas por 3, a função deve retornar "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Se o número for divísivel apenas por 5, a função deve retornar "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Se o número não for divísivel por 3 nem por 5, a função deve retornar o próprio número', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('Retornar false caso o parâmetro fornecido não seja um valor numérico', () => {
    expect(myFizzBuzz('4')).toBe(false);
  });
});
