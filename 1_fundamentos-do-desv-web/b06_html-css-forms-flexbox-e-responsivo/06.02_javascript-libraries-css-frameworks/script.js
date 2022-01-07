// Seletores primeiro fieldset
const InputName = document.getElementById('input-name');
const email = document.getElementById('input-email');
const cpf = document.getElementById('input-cpf');
const address = document.getElementById('input-endereco');
const city = document.getElementById('input-cidade');
const house = document.getElementById('radio-casa');
const apartment = document.getElementById('radio-apartamento');
const selectState = document.getElementById('select-estados');

// Seletores segundo filedset
const abstract = document.getElementById('input-resumo');
const role = document.getElementById('input-cargo');
const description = document.getElementById('input-descricao-cargo');
const startDate = document.getElementById('input-data-inicio');

// Seletor botão submit
const submit = document.getElementById('button-submit');

// Seletor div currículo
const divResume = document.getElementById('div-resume');

const arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

let errorMessage = '';
let errorMessageDate = [];

const appendOptions = (item) => {
  const newOption = document.createElement('option');
  newOption.innerHTML = item;
  selectState.appendChild(newOption);
};

arrayEstados.forEach(appendOptions);

function checkName() {
  if (InputName.value.length < 0 || InputName.value.length > 40) {
    return false;
  }
  return true;
}

function checkEmail() {
  if (email.value.length < 0 || email.value.length > 50) {
    return false;
  }
  return true;
}

function checkAddress() {
  if (address.value.length < 0 || address.value.length > 200) {
    return false;
  }
  return true;
}

function checkCity() {
  if (city.value.length < 0 || city.value.length > 28) {
    return false;
  }
  return true;
}

function checkCPF() {
  if (cpf.value.length === 11) {
    return true;
  }
  return false;
}

function checkAbstract() {
  if (abstract.value.length < 0 || abstract.value.length > 1000) {
    return false;
  }
  return true;
}

function checkRole() {
  if (role.value.length < 0 || role.value.length > 40) {
    return false;
  }
  return true;
}

function checkDescription() {
  if (description.value.length < 0 || description.value.length > 500) {
    return false;
  }
  return true;  
}

function checkDateFormat(date) {
  if (date.length !== 10) {
    return false;
  }
  if (!(date[2] === '/') && !(date[5] === '/')) {
    return false;
  }
  return true;
}

// Função para descobrir se o ano é bissext seguingo os passos:
// Step-1 : If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// Step-2 : If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// Step-3 : If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// Step-4 : The year is a leap year (it has 366 days).
// Step-5 : The year is not a leap year (it has 365 days).

function checkLeapYear(year) {
  const steps = {
    1: 4,
    2: 100,
    3: 400
  }
  
  let currentStep = '1';
  let checkDone = false;

  while (checkDone === false) {
    if (year % steps[currentStep] === 0) {
      switch (currentStep) {
        case '1':
          currentStep = '2'
          break;
      
        case '2':
          currentStep = '3'
          break;
        
        case '3':
          return true;
      }
    } else {
      switch (currentStep) {
        case '1':
          return false;
      
        case '2':
          return true;
        
        case '3':
          return false;
      }
    }
  }
}

function checkDay(day, month, year) {
  if (!day || !month || !year) {
    return false;
  }
  let months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  if(checkLeapYear(year)) {
    months['02'] = 29;
  }

  if ((day < 1 || day > months[month])) {
    return false;
  }
  return true;
}

function checkMonth(month) {
  if (!month) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  return true;
}

function checkYear(year) {
  if (!year) {
    return false;
  }
  if (year < 0) {
    return false;
  }
  return true;
}

function checkDateValid() {
  const date = startDate.value;
  const day = parseInt(`${date[0]}${date[1]}`);
  const month = parseInt(`${date[3]}${date[4]}`);
  const year = parseInt(`${date[6]}${date[7]}${date[8]}${date[9]}`);
  if(!checkDateFormat(date)) {
    errorMessageDate = 'Erro 02: data com formato errado.';
    return;
  }
  if (!checkMonth(month)) {
    errorMessageDate.push('mês');
  }
  if (!checkYear(year)) {
    errorMessageDate.push('ano');
  }
  if (!checkDay(day, month, year)) {
    errorMessageDate.unshift('dia');
  }
  if(errorMessageDate.length === 1) {
    errorMessageDate.join('');
    errorMessageDate = `Erro 02: ${errorMessageDate} inválido`;
  }
  if (errorMessageDate.length > 1 && errorMessageDate.length < 3) {
    errorMessageDate.join('');
    errorMessageDate = `Erro 02: ${errorMessageDate} inválidos`;
  }
  if (errorMessageDate.length === 3) {
    errorMessageDate = `Erro 02: ${errorMessageDate[0]}, ${errorMessageDate[1]} e ${errorMessageDate[2]} inválidos`;
  }
}

function addDataToResume() {
  const requiredInputs = document.querySelectorAll('[required]');
  for (const input of requiredInputs) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${input.name.toUpperCase()}: ${input.value}`;
    divResume.appendChild(paragraph);
  }
  divResume.style.display = 'block';
}

function createResume() {
  divResume.innerHTML = '';
  if (errorMessage.length === 0 && errorMessageDate.length === 0) {  
    addDataToResume();
  } else {
    if (errorMessage.length > 0) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = errorMessage;
      divResume.appendChild(paragraph);
      divResume.style.display = 'block';
    }   
    if (errorMessageDate.length > 0) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = errorMessageDate;
      divResume.appendChild(paragraph);
      divResume.style.display = 'block';
    }
  }
}

function checkDataSubmitted() {
  if (!checkName() || !checkEmail() || !checkAddress() || !checkCity() || !checkCPF() || !checkAbstract() || !checkRole() || !checkDescription()) {
    errorMessage = 'Erro 01: dados inválidos ou insuficientes.'
  } else {
    errorMessage = '';
  }
}

function resetError() {
  errorMessage = '';
  errorMessageDate = [];
}

function submitData(event) {
  event.preventDefault();
  resetError();
  checkDataSubmitted();
  checkDateValid();
  createResume();
}

window.onload = () => {
  submit.addEventListener('click', submitData);
};
