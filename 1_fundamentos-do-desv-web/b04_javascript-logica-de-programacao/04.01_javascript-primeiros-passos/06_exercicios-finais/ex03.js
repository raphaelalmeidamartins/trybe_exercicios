// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. 

const a = 1;
const b = 2;
const c = 5;

let maiorDos3;

if (a >= b) {
    maiorDos3 = a;
} else {
    maiorDos3 = b;
}

if (maiorDos3 >= c) {
    maiorDos3 = maiorDos3;
} else {
    maiorDos3 = c;
}

console.log (maiorDos3);