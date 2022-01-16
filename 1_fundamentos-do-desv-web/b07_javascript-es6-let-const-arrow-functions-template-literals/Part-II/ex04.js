const string = 'Tryber x aqui!'
const mySkills = ['JavaScript', 'HTML', 'CSS'];

const replaceX = (string, stringName) => string.replace(/[ ][x][ ]/g, ` ${stringName} `);

const concatSkills = (string, arraySkills) => {
  const arraySorted = arraySkills.sort();
  let newString = `${string} Minhas principais habilidades são:`
  for (const skill of arraySorted) {
    newString += `\n* ${skill};`
  }
  newString += '\n#goTrybe'
  return newString;
};

console.log(concatSkills(replaceX(string, 'Raphael'), mySkills));
