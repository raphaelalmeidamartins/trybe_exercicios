const sentence = 'Raphael Almeida Martins de Oliveira Paralelepipedo A';
const arrayOnlyWords = sentence.split(' ').map((word) => {
  const regExp = /[^a-zà-ú]*/gi;
  word = word.replace(regExp, '');
  return word;
});

const whichLongestWord = (previous, current) => previous.length > current.length ? previous : current;

console.log(arrayOnlyWords.reduce(whichLongestWord));
