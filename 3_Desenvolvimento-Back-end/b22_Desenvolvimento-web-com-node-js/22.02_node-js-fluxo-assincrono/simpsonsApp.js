const fs = require('fs').promises;

const readCharactersFile = async () => {
  const chars = await fs.readFile('./simpsons.json', 'utf-8');
  const charsArr = JSON.parse(chars);
  return charsArr;
};

const getAllCharacters = async () => {
  const charsArr = await readCharactersFile();
  charsArr.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};

const getCharacterById = async (charId) => {
  const charsArr = await readCharactersFile();
  const selectedChar = charsArr.find(({ id }) => id === charId);
  if (selectedChar) return Promise.resolve(selectedChar);
  else return Promise.reject("id não encontrado");
}

const removeCharacters = async (...ids) => {
  const charsArr = await readCharactersFile();
  const updatedCharsArr = charsArr.filter(({ id }) => !ids.includes(id));
  fs.writeFile('./simpsons.json', JSON.stringify(updatedCharsArr));
}

const createSimpsonsFamilyFile = async () => {
  const charsArr = await readCharactersFile();
  const ids = ['1', '2', '3', '4'];
  const updatedCharsArr = charsArr.filter(({ id }) => ids.includes(id));
  fs.writeFile('./simpsonFamily.json', JSON.stringify(updatedCharsArr));
}

const addNewFamilyMember = async () => {
  const simpsonFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamilyArr = JSON.parse(simpsonFamily);
  simpsonFamilyArr.push({ id: `${simpsonFamilyArr.length + 1}`, name: 'Nelson Muntz' });
  fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyArr));
}

const replaceNelsonMuntz = async () => {
  const simpsonFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamilyArr = JSON.parse(simpsonFamily);
  const updatedSimpsonsFamilyArr = simpsonFamilyArr.map((member) => {
    if (member.name !== 'Nelson Muntz') return member;
    else return {...member, name: 'Maggie Simpson'};
  });
  fs.writeFile('./simpsonFamily.json', JSON.stringify(updatedSimpsonsFamilyArr));
}

const main = async () => {
  await createSimpsonsFamilyFile();
  await addNewFamilyMember();
  await replaceNelsonMuntz();
}

main();
