let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for , descubra qual o menor valor contido no array e imprima-o; 

let lowest = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

console.log(lowest);