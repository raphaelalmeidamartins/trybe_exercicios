const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrayOfArrays) {
  // escreva seu código aqui
  return arrayOfArrays.reduce((newArray, currentArray) => newArray.concat(currentArray));
}

console.log(flatten(arrays));
