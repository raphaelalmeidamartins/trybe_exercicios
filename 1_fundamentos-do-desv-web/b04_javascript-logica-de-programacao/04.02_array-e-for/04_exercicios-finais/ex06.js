let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

let quantosPares = 0;

for (let number of numbers) {
    number = number % 2;
    if (number == 0) {
        quantosPares += 1;
    }
}

console.log(quantosPares);