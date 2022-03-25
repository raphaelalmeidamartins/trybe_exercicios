const generateRandomNum = () => Math.floor(Math.random() * 101);
const toUpperCaseString = (string) => string.toUpperCase();
const returnFirstCharacter = (string) => string.slice(0, 1);
const concatStrings = (string1, string2) => string1 + string2;
const fetchRandomDoguinho = async () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => data.ok ? Promise.resolve(data) : Promise.reject(data));
};

module.exports = {
  generateRandomNum,
  toUpperCaseString,
  returnFirstCharacter,
  concatStrings,
  fetchRandomDoguinho,
 };
