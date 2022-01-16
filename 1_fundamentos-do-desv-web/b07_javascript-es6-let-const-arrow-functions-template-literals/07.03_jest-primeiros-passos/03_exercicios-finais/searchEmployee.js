// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  if (typeof id !== 'string' && typeof detail !== 'string') {
    throw new Error('Os parâmetros precisam ser strings');
  }
  const profId = id;
  let professional;
  for (const prof of professionalBoard) {
    if (prof['id'] === profId) {
      professional = prof;
    }
  }
  if (!professional) {
    throw new Error('Profissional não encontrado, ID inválido');
  }
  if(!professional[`${detail}`]) {
    throw new Error('Detalhe não encontrado!');
  }
  return professional[`${detail}`];
};

module.exports = searchEmployee;
