import JustValidate from './node_modules/just-validate/dist/just-validate.es.js';

const arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

const picker = new Pikaday({
  field: document.getElementById('input-data-inicio'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

const appendOptionsStates = (item) => {
  const newOption = document.createElement('option');
  newOption.innerHTML = item;
  const selectState = document.getElementById('select-estados');
  selectState.appendChild(newOption);
};

arrayEstados.forEach(appendOptionsStates);

const validation = new JustValidate('form', {
  errorFielClass: 'is-invalid',
});

validation
  .addField('#input-name', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },    
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Nome precisa ter no mínimo 3 caracteres.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.'
    },
  ])
  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },    
    {
      rule: 'email',
      errorMessage: 'Email inválido',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.'
    },
  ])
  .addField('#input-cpf', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'CPF inválido',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'CPF inválido',
    },
  ])
  .addField('#input-endereco', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'O limite é de 200 caracteres.'      
    },
  ])
  .addField('#input-cidade', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 28,
      errorMessage: 'O limite é de 28 caracteres.'
    },
  ])
  .addField('#select-estados', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])
  .addRequiredGroup(
    '#radio-group',
    'Uma das opções precisa ser selecionada'
  )
  .addField('#input-resumo', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },    
    {
      rule: 'maxLength',
      value: 1000,
      errorMessage: 'O limite é de 1000 caracteres.'
    },
  ])
  .addField('#input-cargo', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },    
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.'
    },
  ])
  .addField('#input-descricao-cargo', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },    
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres.'
    },
  ])
  .addField('#input-data-inicio', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])

const divResume = document.getElementById('div-resume');

function addDataToResume() {
  divResume.innerHTML = '';
  const requiredInputs = document.querySelectorAll('[required]');
  const resumeTitle = document.createElement('h1');
  resumeTitle.innerHTML = 'Curriculum Vitae';
  resumeTitle.classList.add('title');
  divResume.appendChild(resumeTitle);
  for (const input of requiredInputs) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${input.name.toUpperCase()}: ${input.value}`;
    divResume.appendChild(paragraph);
  }
  divResume.style.display = 'block';
}

// window.onload = () => {

// };
