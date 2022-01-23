const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arrayNames) {
  // escreva seu código aqui
  return arrayNames.reduce((howManyA, currentName) => {
    const stringOnlyA = currentName.match(/a/gi);
    return howManyA += stringOnlyA.length;
  }, 0);
}

console.log(containsA(names));
