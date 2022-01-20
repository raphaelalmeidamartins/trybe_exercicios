const randomNumber = () => Math.floor(Math.random() * (5 - 1)) + 1;

const drawNumber = (givenNumber) => {
  const won = 'Parabéns, você ganhou!';
  const lost = 'Tente novamente!'
  return randomNumber() === givenNumber ? won : lost;
};

console.log(drawNumber(5));
