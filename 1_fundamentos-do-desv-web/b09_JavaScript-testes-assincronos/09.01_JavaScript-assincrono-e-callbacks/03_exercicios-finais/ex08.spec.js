// Verifique se a importação do arquivo correto está sendo feita.
const getPokemonDetails = require('./ex08');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});
