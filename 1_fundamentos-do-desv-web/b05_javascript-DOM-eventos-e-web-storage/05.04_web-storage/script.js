const darkMode = document.getElementById('darkmode');
const inputFontFamily = document.getElementById('font-family');
const inputFontSize = document.getElementById('font-size');
const inputFontColor = document.getElementById('font-color');
const buttonApply = document.getElementById('apply');

function darkModeOnOff() {
  if (darkMode.innerText === 'Off') {
    localStorage.setItem('background-color', 'black');
    localStorage.setItem('label-color', 'white');
    document.body.style.backgroundColor = 'black';
    const labels = document.getElementsByTagName('label');
    for (let label of labels) {
      label.style.color = localStorage.getItem('label-color');
    }
    darkMode.innerText = 'On';
  } else {
    localStorage.setItem('background-color', 'white');
    localStorage.setItem('label-color', 'black');
    document.body.style.backgroundColor = 'white';
    const labels = document.getElementsByTagName('label');
    for (let label of labels) {
      label.style.color = localStorage.getItem('label-color');
    }
    darkMode.innerText = 'Off';
  }
}

darkMode.addEventListener('click', darkModeOnOff);

function recordPreferences() {
  localStorage.setItem('font-family', inputFontFamily.value);
  localStorage.setItem('font-size', `${inputFontSize.value}`);
  localStorage.setItem('font-color', inputFontColor.value);
}

function setPageAccordingToPreferences() {
  recordPreferences();
  if (localStorage.length !== 0) {
    const body = document.body;
    body.style.backgroundColor = localStorage.getItem('background-color');

    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
      p.style.fontFamily = localStorage.getItem('font-family');
      p.style.color = localStorage.getItem('font-color');
      p.style.fontSize = `${localStorage.getItem('font-size')}px`;
    }

    const headers1 = document.getElementsByTagName('h1');
    for (let h of headers1) {
      h.style.fontFamily = localStorage.getItem('font-family');
      h.style.color = localStorage.getItem('font-color');
      h.style.fontSize = `${localStorage.getItem('font-size') * 2}px`;
    }
  }
}

function setDefaultPreferences() {
  localStorage.setItem('font-family', 'serif');
  localStorage.setItem('font-size', '12px');
  localStorage.setItem('font-color', 'black');
  localStorage.setItem('background-color', 'white');
  darkMode.innerText = 'Off';
}

buttonApply.addEventListener('click', setPageAccordingToPreferences);

window.onload = function() {
  if (localStorage.length === 0) {
    setDefaultPreferences();
    setPageAccordingToPreferences();
  } else {
    setPageAccordingToPreferences();
  }
}