//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto. 

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log(key, car[key]);
}