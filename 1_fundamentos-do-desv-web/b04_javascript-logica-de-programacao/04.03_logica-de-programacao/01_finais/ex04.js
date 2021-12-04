//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. 

let biggestPrimeNumber = 2;

for (let i = 12; i <= 50; i += 1) {
  if ((i % 2) === 0 || (i % 3) === 0 || (i % 5) === 0 || (i % 7) === 0 || (i % 11) === 0) {
    biggestPrimeNumber = biggestPrimeNumber;
  } else {
    biggestPrimeNumber = i;
  }
}

console.log(biggestPrimeNumber);