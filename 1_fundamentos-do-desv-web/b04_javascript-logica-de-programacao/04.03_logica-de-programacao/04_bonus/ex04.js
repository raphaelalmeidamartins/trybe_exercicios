// Depois, faça uma pirâmide com n asteriscos de base: 

let n = 5;
let centroN = (n+1)/2;
let linha = [];
let colunas = [];
let symbol = "*";

for (let iColuna = 0; iColuna < centroN; iColuna += 1) {
  for (let iLinha = 0; iLinha < n; iLinha += 1) {
    linha.push(symbol);
  }
  colunas[iColuna] = linha;
  linha = [];
}

console.log(colunas);
