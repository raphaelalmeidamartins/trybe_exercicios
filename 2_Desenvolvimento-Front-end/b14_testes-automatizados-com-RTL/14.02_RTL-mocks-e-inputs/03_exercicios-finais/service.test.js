const service = require('./service');

test('Verifica implementação da função generateRandomNum', () => {
  service.generateRandomNum = jest.fn().mockReturnValue(10);
  service.generateRandomNum();

  expect(service.generateRandomNum).toHaveBeenCalled();
  expect(service.generateRandomNum()).toBe(10);
  expect(service.generateRandomNum).toHaveBeenCalledTimes(2);
});

test('Define novo mock para função generateRandomNum', () => {
  const mockGenerateRandomNum = jest
    .spyOn(service, 'generateRandomNum')
    .mockImplementation((a, b) => a / b);

  expect(mockGenerateRandomNum(10, 2)).toBe(5);
  expect(mockGenerateRandomNum).toHaveBeenCalled();
  expect(mockGenerateRandomNum).toHaveBeenCalledTimes(3);
  expect(mockGenerateRandomNum).toHaveBeenCalledWith(10, 2);
});

test('Define mais um novo mock para função generateRandomNum', () => {
  const mockGenerateRandomNum = jest
    .spyOn(service, 'generateRandomNum')
    .mockImplementation((a, b, c) => a * b * c);

  expect(mockGenerateRandomNum(10, 2, 2)).toBe(40);
  expect(mockGenerateRandomNum).toHaveBeenCalled();
  expect(mockGenerateRandomNum).toHaveBeenCalledTimes(4);
  expect(mockGenerateRandomNum).toHaveBeenCalledWith(10, 2);
});

const mockToUpperCaseString = jest
  .spyOn(service, 'toUpperCaseString')
  .mockImplementation((string) => string.toLowerCase());

const mockReturnFirstCharacter = jest
  .spyOn(service, 'returnFirstCharacter')
  .mockImplementation((string) => string.slice(string.length - 1, string.length));

const mockConcatStrings = jest
  .spyOn(service, 'concatStrings')
  .mockImplementation((string1, string2, string3) => string1 + string2 + string3);

test('Verifica o mock da toUpperCaseString', () => {
  expect(mockToUpperCaseString('RAPHA')).toBe('rapha');
  expect(mockToUpperCaseString).toHaveBeenCalled();
  expect(mockToUpperCaseString).toHaveBeenCalledTimes(1);
  expect(mockToUpperCaseString).toHaveBeenCalledWith('RAPHA');
});

test('Verifica o mock da mockReturnFirstCharacter', () => {
  expect(mockReturnFirstCharacter('RAPHA')).toBe('A');
  expect(mockReturnFirstCharacter).toHaveBeenCalled();
  expect(mockReturnFirstCharacter).toHaveBeenCalledTimes(1);
  expect(mockReturnFirstCharacter).toHaveBeenCalledWith('RAPHA');
});

test('Verifica o mock da mockConcatStrings', () => {
  expect(mockConcatStrings('rapha', ' almeida', ' martins')).toBe('rapha almeida martins');
  expect(mockConcatStrings).toHaveBeenCalled();
  expect(mockConcatStrings).toHaveBeenCalledTimes(1);
  expect(mockConcatStrings).toHaveBeenCalledWith('rapha', ' almeida', ' martins');
});

test('Verifica implementação original', () => {
  service.toUpperCaseString.mockRestore();
  expect(service.toUpperCaseString('rapha')).toBe('RAPHA');
});

service.fetchRandomDoguinho = jest.fn();
afterEach(service.fetchRandomDoguinho.mockReset);

test('Testando requisição caso a promisse resolva', async () => {
  service.fetchRandomDoguinho.mockResolvedValue('sucess');

  await expect(service.fetchRandomDoguinho()).resolves.toBe('sucess');
  expect(service.fetchRandomDoguinho).toHaveBeenCalled();
  expect(service.fetchRandomDoguinho).toHaveBeenCalledTimes(1);
});

test('Testando requisição caso seja rejeitada', async () => {
  service.fetchRandomDoguinho.mockRejectedValue('failed');

  await expect(service.fetchRandomDoguinho()).rejects.toBe('failed');
  expect(service.fetchRandomDoguinho).toHaveBeenCalled();
  expect(service.fetchRandomDoguinho).toHaveBeenCalledTimes(1);
})
