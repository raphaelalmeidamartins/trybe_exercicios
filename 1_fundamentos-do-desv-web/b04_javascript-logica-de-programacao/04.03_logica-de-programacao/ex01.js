// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 10;
let print = "";
let symbol = "*"

for (let index = 1; index <= n; index += 1) {
    print = print + symbol
}

for (let index = 1; index <=n ; index += 1) {
    console.log(print);
}