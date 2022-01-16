function decode(string) {
  const arrayStringSplit = string.split('');
  const vowelsNumbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let i = 0; i < arrayStringSplit.length; i += 1) {
    if (vowelsNumbers[arrayStringSplit[i]]) {
      arrayStringSplit[i] = vowelsNumbers[arrayStringSplit[i]];
    }
  }
  return arrayStringSplit.join('');
}

module.exports = decode;
