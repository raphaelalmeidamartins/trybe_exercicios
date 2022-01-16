function encode(string) {
  const stringToEncode = string.toLowerCase();
  const arrayStringSplit = stringToEncode.split('');
  const vowelsNumbers = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let i = 0; i < arrayStringSplit.length; i += 1) {
    if (vowelsNumbers[arrayStringSplit[i]]) {
      arrayStringSplit[i] = vowelsNumbers[arrayStringSplit[i]];
    }
  }
  return arrayStringSplit.join('');
}

module.exports = encode;
