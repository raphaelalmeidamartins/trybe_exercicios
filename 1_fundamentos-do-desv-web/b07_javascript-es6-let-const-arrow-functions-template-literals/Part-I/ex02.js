const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function printSortedArray (array) {
  return array.sort((a, b) => a - b);
}

printSortedArray(oddsAndEvens).forEach((x) => console.log(x));