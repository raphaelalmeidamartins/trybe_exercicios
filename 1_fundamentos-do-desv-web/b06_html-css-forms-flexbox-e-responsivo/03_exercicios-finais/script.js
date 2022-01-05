const selectEstado = document.getElementById('select-estados');
const dataInicio = document.getElementById('input-data-inicio');

const arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

const appendOptions = (item) => {
  const newOption = document.createElement('option');
  newOption.innerHTML = item;
  selectEstado.appendChild(newOption);
};

arrayEstados.forEach(appendOptions);

function checkIfDateIsCorrect(event) {
  let input = event.target;
  input = input.value;
  if (input[2] === '/' && input[5] === '/') {
    const day = `${input[0]}${input[1]}`
    const month = `${input[3]}${input[4]}`
    const year = `${input[6]}${input[7]}${input[8]}${input[9]}`
    if (!(day > 0 && day <= 31) && !(month > 0 && month <= 12) && !(year > 0)) {
      alert('Erro: insira uma data válida!');
    }
  } else {
    alert('Erro: insira uma data válida!');
  }
}

dataInicio.addEventListener('change', checkIfDateIsCorrect);
