//Exercício anterior

let contagemAte25 = [];

for (let i = 1; i <= 25; i += 1) {
    contagemAte25.push(i);
}

console.log(contagemAte25);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let divisao of contagemAte25) {
    divisao = divisao / 2;
    console.log(divisao);
}

