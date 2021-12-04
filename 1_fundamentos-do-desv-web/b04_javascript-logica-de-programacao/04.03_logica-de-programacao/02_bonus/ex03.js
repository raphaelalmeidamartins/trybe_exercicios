let n = 5;
let linha = [];
let symbol = "*";

for (let index = 0; index < n; index += 1) {
    linha.push(" ");
}

for (let index = 0; index < n; index += 1) {
    linha.shift();
    linha.push(symbol);
    console.log(linha.join(""));
}