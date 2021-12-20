function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const calenderDays = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];
const color = 'purple';

function addLegend(color) {
  const newLegend = document.createElement('div');
  newLegend.style.backgroundColor = color;
  newLegend.classList.add('task');
  newLegend.addEventListener('click', selectTask);
  const myTaskList = document.querySelector('.my-tasks');
  myTaskList.appendChild(newLegend);
}

const task = 'Projeto';

function addTaskOnTheList(string) {
  const newTask = document.createElement('span');
  newTask.innerHTML = string;
  const myTaskList = document.querySelector('.my-tasks');
  myTaskList.appendChild(newTask);
  addLegend(color);
}

const inputAppointments = document.getElementById('task-input');

function addAppointmentOnTheList() {
  if (!inputAppointments.value) {
    alert('Texto inválido');
  } else {
    const newAppointment = document.createElement('li');
    const appointmentList = document.querySelector('.task-list');
    newAppointment.innerHTML = inputAppointments.value;
    appointmentList.appendChild(newAppointment);
  }
}

const buttonAddAppointment = document.getElementById('btn-add');
buttonAddAppointment.addEventListener('click', addAppointmentOnTheList);
inputAppointments.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addAppointmentOnTheList();
  }
});

function selectTask(event) {
  const previousSeleted = document.querySelector('.selected');
  const selectedTask = event.target;
  if (selectedTask === previousSeleted) {
    previousSeleted.classList.remove('selected');
  } else if (previousSeleted) {
    previousSeleted.classList.remove('selected');
    selectedTask.classList.add('selected');
  } else {
    selectedTask.classList.add('selected');
  }
}

function zoomInMouseHover(event) {
  const currentDay = event.target;
  currentDay.style.fontSize = '1.5em';
}

function zoomOutMouseLeaves(event) {
  const currentDay = event.target;
  currentDay.style.fontSize = '';
}

function selectDays(event) {
  const selectedDay = event.target;
  if (selectedDay.style.color === color) {
    selectedDay.style.color = '';
  } else {
    selectedDay.style.color = color;
  }
}

function addDays() {
  for (const day of dezDaysList) {
    const newDay = document.createElement('li');
    newDay.className = 'day';
    newDay.innerHTML = day;
    newDay.addEventListener('mouseenter', zoomInMouseHover);
    newDay.addEventListener('mouseleave', zoomOutMouseLeaves);
    newDay.addEventListener('click', selectDays);
    calenderDays.appendChild(newDay);
  }
}

function lookUpHolidays(day) {
  for (const holiday of dezHolidays) {
    if (holiday.toString() === day) {
      return true;
    }
  }
  return false;
}

function addHolidays() {
  const arrayCalenderDays = calenderDays.children;
  for (const day of arrayCalenderDays) {
    if(lookUpHolidays(day.innerHTML)) {
      day.classList.add('holiday');
    }
  }
}

function markFridays() {
  const previousMarked = document.querySelector('.marked-friday');
  if (previousMarked) {
    const arrayFridays = document.querySelectorAll('.marked-friday');
    for (const friday of arrayFridays) {
      friday.classList.remove('marked-friday');
    }    
  } else {  
    const arrayFridays = document.querySelectorAll('.friday');
    for (const friday of arrayFridays) {
      friday.classList.add('marked-friday');
    }
  }
}

function sextou() {
  const arrayFridays = document.querySelectorAll('.friday');
  const newText = 'SEXTOU';
  if (arrayFridays[0].innerHTML === newText) {
    for (let i = 0; i < arrayFridays.length; i += 1) {
      arrayFridays[i].innerHTML = dezFridays[i];
    }
  } else {
    for (let friday of arrayFridays) {
      friday.innerHTML = newText;
    }
  }
}

function lookUpFridays(day) {
  for (const friday of dezFridays) {
    if (friday.toString() === day) {
      return true;
    }
  }
  return false;
}

function addFridays() {
  const arrayCalenderDays = calenderDays.children;
  for (const day of arrayCalenderDays) {
    if(lookUpFridays(day.innerHTML)) {
      day.classList.add('friday');
    }
  }
}

const stringFridays = 'Sexta-feira';

function fridaysButton(string) {
  const newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  newButton.innerHTML = string;
  newButton.addEventListener('click', markFridays);
  newButton.addEventListener('click', sextou);
  document.querySelector('.buttons-container').appendChild(newButton);
}

function markHolidays() {
  const previousMarked = document.querySelector('.marked-holiday');
  if (previousMarked) {
    const arrayHolidays = document.querySelectorAll('.marked-holiday');
    for (const holiday of arrayHolidays) {
      holiday.classList.remove('marked-holiday');
    }    
  } else {  
    const arrayHolidays = document.querySelectorAll('.holiday');
    for (const holiday of arrayHolidays) {
      holiday.classList.add('marked-holiday');
    }
  }
}

const stringHolidays = 'Feriados';

function holidaysButton(string) {
  const newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = string;
  newButton.addEventListener('click', markHolidays);
  document.querySelector('.buttons-container').appendChild(newButton);
}

window.onload = function() {
  addDays();
  addHolidays();
  addFridays();
  holidaysButton(stringHolidays);
  fridaysButton(stringFridays);
  addTaskOnTheList(task);
};
