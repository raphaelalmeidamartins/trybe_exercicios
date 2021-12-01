// Depois, faça uma pirâmide com n asteriscos de base: 

let n = 5;
let centro_n = (n+1)/2;
let linha = [];
let symbol = "*";

for (let index = 0; index < centro_n; index += 1) {
    linha.unshift(" ");
}

linha.push("*");

for (let index2 = 0; index2 < centro_n; index2 += 1) {
    linha.push(" ");
}

console.log(linha);

// for (let index = 0; index < n; index += 1) {
//     linha.shift();
//     linha.push("*");
//     console.log(linha.join([separator = ""]));
// }