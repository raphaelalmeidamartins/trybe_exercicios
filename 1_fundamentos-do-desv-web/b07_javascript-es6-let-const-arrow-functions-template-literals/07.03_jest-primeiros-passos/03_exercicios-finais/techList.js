function techList(arrayTechList, namePerson) {
  const arrayTechListSorted = arrayTechList.sort();
  const arrayObjectsTechList = [];
  for (const item of arrayTechListSorted) {
    const object = {
      tech: item,
      name: namePerson,
    };
    arrayObjectsTechList.push(object);
  }
  if (arrayObjectsTechList.length === 0) {
    return 'Vazio!';
  }
  return arrayObjectsTechList;
}

module.exports = techList;
