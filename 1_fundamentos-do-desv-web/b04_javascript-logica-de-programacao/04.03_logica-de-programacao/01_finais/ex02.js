//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string "trybe" como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. 

let string = 'trybe';
let arrayStringSplited = string.split('');
let arrayInvertedSpring = [];

for (let i = (arrayStringSplited.length - 1); i >= 0; i -= 1) {
  arrayInvertedSpring.push(arrayStringSplited[i]);
}
console.log(arrayInvertedSpring.join(''));