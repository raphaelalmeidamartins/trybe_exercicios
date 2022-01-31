const uppercase = require('./ex07');

describe('Verifica se retorna string em maísculo', () => {
  it('Verifica se \'test\' retorna como \'TESTE\'', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    })
  });
});
