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

new JustValidate('#form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    resume: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      required: 'O campo de email é obrigatório.',
      email: 'O email digitado não é válido.',
      maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 11 caracteres.'
    },
    address: {
      required: 'O campo endereço é obrigatório.',
      maxLength: 'O limite é de 200 caracteres.'
    },
    city: {
      required: 'O campo cidade é obrigatório.',
      maxLength: 'O limite é de 28 caracteres.'
    },
    state: {
      required: 'O campo estado é obrigatório.',
    },
    radio: {
      required: 'A escolha de um item é obrigatória.',
    },
    resume: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 1000 caracteres.'
    },
    position: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    description: {
      required: 'Este campo é obrigatório.',
      maxLength: 'O limite é de 500 caracteres.'
    },
    date: {
      required: 'Este campo é obrigatório.',
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }
});

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
