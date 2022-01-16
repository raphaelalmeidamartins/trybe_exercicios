const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewProperty = (object, newKey, keyValue) => {
  object[`${newKey}`] = keyValue;
};

addNewProperty(lesson2, 'turno', 'noite');

const listObjectKeys = (object) => {
  const arrayKeys = Object.keys(object);
  arrayKeys.forEach((key) => console.log(key));
};

listObjectKeys(lesson2);

const whatIsTheObjectLength = (object) => {
  console.log(Object.keys(object).length);
}

whatIsTheObjectLength(lesson2);

const listObjectValues = (object) => {
  const arrayValues = Object.values(object);
  arrayValues.forEach((value) => console.log(value));
};

listObjectValues(lesson2);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalNumberOfStudents = (object) => {
  const arrayKeys = Object.keys(object);
  let totalNumber = 0;
  arrayKeys.forEach((key) => totalNumber += object[`${key}`].numeroEstudantes);
  console.log(totalNumber);
};

totalNumberOfStudents(allLessons);

const indexOfKey = (object, index) => {
  const arrayKeys = Object.keys(object);
  console.log(arrayKeys[index]);
};

indexOfKey(lesson1, 0);

const verifyPair = (object, key, value) => {
  if (object[key] && object[key] === value) {
    console.log(true);
  } else {
    console.log(false);
  }
};

verifyPair(lesson1, 'materia', 'Matemática');
verifyPair(lesson1, 'materia', 'Português');
verifyPair(lesson1,'linguagem', 'JavaScript');

// Bônus
const howManyStudentsWatchedMathClass = (object) => {
  let howManyStudents = 0;
  const arrayKeys = Object.keys(object);
  arrayKeys.forEach((key) => {
    if (object[`${key}`].materia === 'Matemática') {
      howManyStudents += object[`${key}`].numeroEstudantes;
    }
  });
  console.log(howManyStudents);
};

howManyStudentsWatchedMathClass(allLessons);

const generateReport = (object, teacher) => {
  const professor = teacher;
  const aulas = [];
  let howManyStudents = 0;
  const arrayKeys = Object.keys(object);
  arrayKeys.forEach((key) => {
    if (object[`${key}`].professor === professor) {
      aulas.push(object[`${key}`].materia);
      howManyStudents += object[`${key}`].numeroEstudantes;
    }
  });
  const newReport = {};
  newReport.professor = professor;
  newReport.aulas = aulas;
  newReport.estudantes = howManyStudents;
  console.log(newReport);
};

generateReport(allLessons, 'Maria Clara');
