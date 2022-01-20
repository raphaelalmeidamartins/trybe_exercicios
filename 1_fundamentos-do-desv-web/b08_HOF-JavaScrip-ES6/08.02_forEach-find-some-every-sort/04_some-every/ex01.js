const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((ArrName) => ArrName === name);
}

console.log(hasName(names, 'Ana'))
