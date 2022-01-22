const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenSum = numbers.reduce((result, currentNumber) => {
  return currentNumber % 2 === 0 ? result + currentNumber : result;
});

console.log(evenSum);
