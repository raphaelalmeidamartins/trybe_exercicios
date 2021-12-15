// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romanNumbersConvertor(string) {
  let stringSplited = string.split('');
  let arrayConverted = [];
  
  const romanNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
  }
  
  for (const letter of stringSplited) {
    arrayConverted.push(romanNumbers[letter.toLocaleLowerCase()])
  }
  
  for (let i = 0; i < arrayConverted.length; i += 1) {
    if (arrayConverted[i] < arrayConverted[i + 1]){
      arrayConverted[i] *= -1;
    }
  }
  
  let convertedNumber = 0;
  
  for (const num of arrayConverted) {
    convertedNumber += num;
  }

  return convertedNumber;
}

