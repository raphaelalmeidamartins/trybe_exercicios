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

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função. 
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function evenNumbers(vector) {
  let arrayEvenNumbers = [];
  for (const vectors of vector) {
    for (const num of vectors) {
      if (num % 2 === 0) {
        arrayEvenNumbers.push(num);
      }
    }
  }
  return arrayEvenNumbers;
}

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. 
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let fruitCountObject = {};
let string = 'Sua cesta possui: ';

for (let i = 0; i < basket.length; i += 1) {
  let fruitCountVar = 0;
  for (const fruit of basket) {
    if (basket[i] === fruit) {
      fruitCountVar += 1;
    }
  }
  fruitCountObject[basket[i]] = fruitCountVar;
}

for (const fruit in fruitCountObject) {
  if (fruitCountObject[fruit] === 1) {
    string += `${fruitCountObject[fruit]} ${fruit}, `
  } else {
    string += `${fruitCountObject[fruit]} ${fruit}s, `
  }
}

console.log(string);

// Usando o objeto abaixo, faça os exercícios a seguir: 
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101". 

const moradorAtual = moradores.blocoDois.reverse()[0];

console.log(`O morador do bloco 2 de nome ${moradorAtual.nome} ${moradorAtual.sobrenome} mora no ${moradorAtual.andar}º andar, apartamento ${moradorAtual.apartamento}`);

