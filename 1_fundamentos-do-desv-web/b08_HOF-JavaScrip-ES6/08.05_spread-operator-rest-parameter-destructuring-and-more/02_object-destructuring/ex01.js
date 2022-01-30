const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userAndJobInfos = {
  ...user,
  ...jobInfos,
};

console.log(userAndJobInfos);

// Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic

const { name, age, nationality, profession, squad } = userAndJobInfos;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm Brazilian. I work as a ${profession} and my squad is ${squad}`);
