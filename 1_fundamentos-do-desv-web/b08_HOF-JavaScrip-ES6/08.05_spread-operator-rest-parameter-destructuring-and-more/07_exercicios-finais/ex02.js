const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));
