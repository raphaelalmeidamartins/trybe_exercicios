const student1 = {
  name: 'Raphael',
  age: 27,
  favoriteLanguage: 'JavaScript'
}

const student2 = {
  softSkill: 'Liderança'
}

const newStudent = Object.assign({}, student1, student2);

console.log(newStudent);
