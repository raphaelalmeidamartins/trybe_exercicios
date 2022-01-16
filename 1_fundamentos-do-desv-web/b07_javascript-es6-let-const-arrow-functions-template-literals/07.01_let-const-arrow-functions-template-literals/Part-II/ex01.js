const generateNumbers = (n) => {
  const numbers = []; 
  for (let i = 1; i < n; i += 1) {
    numbers.push(i);
  }
  return numbers;
}

const calculateFactorial = (numbers, n) => {
  const iterator = numbers[Symbol.iterator]();
  let factorial = n;
  numbers.forEach(() => factorial *= iterator.next().value);
  return factorial;
}

const whatIsTheFactorial = (n) => n < 0 ? 'N precisa ser um número natural.' : calculateFactorial(generateNumbers(n), n);

console.log(whatIsTheFactorial(5));
