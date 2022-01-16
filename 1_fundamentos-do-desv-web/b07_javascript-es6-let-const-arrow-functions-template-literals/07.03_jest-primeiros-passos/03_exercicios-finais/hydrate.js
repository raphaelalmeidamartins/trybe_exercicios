function hydrate(string) {
  const stringReplaced = string.replace(' e ', ', ');
  const arrayStringSplited = stringReplaced.split(', ');
  let howManyCupsOfWater = 0;
  let howManyCupsCurrentDrink = 0;
  for (let i = 0; i < arrayStringSplited.length; i += 1) {
    let drink = arrayStringSplited[i].split(' ');
    howManyCupsCurrentDrink = parseInt(drink[0], 10); // 10 é o radix
    howManyCupsOfWater += howManyCupsCurrentDrink;
  }
  if (howManyCupsOfWater > 1) {
    return `${howManyCupsOfWater} copos de água`;
  }
  return `${howManyCupsOfWater} copo de água`;
}

module.exports = hydrate;
