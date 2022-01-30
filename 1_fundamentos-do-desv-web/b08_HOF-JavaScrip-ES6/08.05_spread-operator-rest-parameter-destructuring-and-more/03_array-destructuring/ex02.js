let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const array = [comida, animal, bebida];
console.log(array);
[animal, bebida, comida] = array;
console.log(animal, bebida, comida);
