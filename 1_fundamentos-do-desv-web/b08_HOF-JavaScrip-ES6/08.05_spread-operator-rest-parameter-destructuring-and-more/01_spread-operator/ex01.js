// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Côco', 'Banana', 'Abacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Maçã', 'Mamão', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
