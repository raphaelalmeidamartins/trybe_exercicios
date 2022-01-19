const generateNewEmployee = (nomeCompleto) => {
  return {
    nomeCompleto,
    email: `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`
  };
};

const newEmployees = () => {
  const employees = {
    id1: generateNewEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateNewEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateNewEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
