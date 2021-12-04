//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. 

let n = 10;
let fatorial = 1;

for (let i = n; i > 0; i -= 1) {
  fatorial *= i;
}

console.log(fatorial);