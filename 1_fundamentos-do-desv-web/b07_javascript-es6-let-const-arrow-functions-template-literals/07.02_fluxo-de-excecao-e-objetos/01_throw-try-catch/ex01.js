const sum = (value1, value2) => value1 + value2;
console.log(sum(2,3));
console.log(sum(2,'3')); // Concatenou ao invés de somar

const sum2 = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum2(2, '3'));

// new - criar objeto, seja personalizado, seja padrão do JavaScript.
class Student {
  constructor(name, age, favoriteLanguage) {
    this.name = name;
    this.age = age;
    this.favoriteLanguage = favoriteLanguage;
  }
}
const student1 = new Student('Raphael', 27, 'JavaScript');
console.log(student1);

// try/catch
const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
};

const sum3 = (value1, value2) => {
  try {
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    throw error.message;
  }
};

console.log(sum3(2, '3'));
