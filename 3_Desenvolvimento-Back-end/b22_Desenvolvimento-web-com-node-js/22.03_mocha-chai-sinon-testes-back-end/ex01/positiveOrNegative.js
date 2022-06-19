const positiveOrNegative = (number) => {
  if (typeof number !== 'number') throw new Error('Erro: número inválido');

  switch (true) {
    case number > 0:
      return 'positivo';
    case number < 0:
      return 'negativo';
    case number === 0:
      return 'neutro';
    default:
      break;
  }
};

module.exports = positiveOrNegative;
