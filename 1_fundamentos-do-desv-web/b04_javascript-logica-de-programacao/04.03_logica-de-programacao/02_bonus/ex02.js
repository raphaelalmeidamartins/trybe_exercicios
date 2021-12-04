// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 

let n = 5;
let linha = [];
let symbol = "*";

for (let index = 0; index < n; index += 1) {
    linha.push(symbol);
    console.log(linha.join([separator = ""]));
}

