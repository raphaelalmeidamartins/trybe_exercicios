//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. 

let largestString = array[0];
let tiniestString = array[0];

for (let string of array) {
  if (string.length > largestString.length) {
    largestString = string;
  }
}

for (let string of array) {
  if (string.length < tiniestString.length) {
    tiniestString = string;
  }
}

console.log(`A maior palavra é ${largestString} e a menor é ${tiniestString}`);

