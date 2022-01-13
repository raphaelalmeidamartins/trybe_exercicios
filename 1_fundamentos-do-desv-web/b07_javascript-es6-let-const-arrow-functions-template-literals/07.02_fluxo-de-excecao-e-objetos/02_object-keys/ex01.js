const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// Algumas formas de adicionar novas propriedades/chaves a objetos

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function studentSkills(object) {
  const skillsNames = Object.keys(object);
  skillsNames.forEach((skillName) => console.log(`${skillName}, Nível: ${object[`${skillName}`]}`));
}

console.log('Estudante 1');
studentSkills(student1);
console.log('Estudante 2');
studentSkills(student2);
