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

const arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

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

function checkCPF() {
  if (cpf.value.length === 11) {
    return true;
  }
  return false;
}

function checkCity() {

}

function checkDateFormat() {
  if (dateValue !== 10) {
    return false;
  }
  if (!(dateValue[2] === '/' && dateValue[5] === '/')) {
    return false;
  }
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

function checkDayMonthYear(day, month, year) {
  if (year < 0) {
    return false;;
  }
  if (month < 1 && month > 12) {
    return false;
  }

  let months = {
    01: 31,
    02: 28,
    03: 31,
    04: 30,
    05: 31,
    06: 30,
    07: 31,
    08: 31,
    09: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  if(checkLeapYear(year)) {
    months['02'] = 29;
  }

  if ((day < 0 && day > months[`${month}`])) {
    return false;
  }
}

function checkDateValid() {
  const date = startDate.value;
  const errorMessage = 'Erro: insira uma data válida.'
  if (!checkDateFormat(date)) {
    alert(errorMessage);
  }
  const day = `${date[0]}${date[1]}`;
  const month = `${date[3]}${date[4]}`;
  const year = `${date[6]}${date[7]}${date[8]}${date[9]}`;;
  if (!checkDayMonthYear(day, month, year)) {
    alert(errorMessage);
  }
}

submit.addEventListener('click', (event) => event.preventDefault());

function createResume() {

}
