let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// quando a variável não foi declarada, o comando typeof retorna 'undefined' (indefinido)
console.log(typeof patientAge);

const base = 5;
let height = 8;
const area = base * height;
const perimeter = base + base + height + height;

console.log(area);
console.log(perimeter);