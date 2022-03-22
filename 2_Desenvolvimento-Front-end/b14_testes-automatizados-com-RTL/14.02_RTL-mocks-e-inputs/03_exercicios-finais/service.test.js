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
