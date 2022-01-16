// Variáveis de tipos primitivos são atribuídas por valor
let aName = 'Raphael';
let otherName = aName;
aName = 'Danilo';

console.log(otherName); // Permanece com o valor anterior.

// Objetos são atribuídos por referência
const student = { name: 'Raphael', age: '27' };
const student2 = student;
student2.name = 'Danilo';

console.log(student);
console.log(student2);
// A alteração no student2 também alterou o student porque ambas as variáveis referenciam o mesmo objeto.

// Vamos ver o que acontece com arrays
const arrayStudent = ['Raphael', '27 years old'];
const arrayStudent2 = arrayStudent;

arrayStudent.shift();
arrayStudent.unshift('Danilo');

console.log(arrayStudent);
console.log(arrayStudent2);
// Aconteceu a mesma coisa que no exemplo anterior porque arrays são objetos

// Primitivos: string, number, boolean
// Objectos: arrays, objetos, funções