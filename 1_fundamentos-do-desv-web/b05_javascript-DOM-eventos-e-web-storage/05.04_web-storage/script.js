const darkMode = document.getElementById('darkmode');
const inputFontFamily = document.getElementById('font-family');
const inputFontSize = document.getElementById('font-size');
const inputLineHeight = document.getElementById('line-height');
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

function onLoadLabelColor() {
  if (localStorage.getItem('background-color') === 'white') {
    localStorage.setItem('label-color', 'black');
  } else {
    localStorage.setItem('label-color', 'white');
  }

  const labels = document.getElementsByTagName('label');
  for (let label of labels) {
    label.style.color = localStorage.getItem('label-color');
  }  
}

darkMode.addEventListener('click', darkModeOnOff);

function recordPreferences() {
  localStorage.setItem('font-family', inputFontFamily.value);
  localStorage.setItem('font-size', `${inputFontSize.value}`);
  localStorage.setItem('line-height', `${inputLineHeight.value}`);
  localStorage.setItem('font-color', inputFontColor.value);
}

function setPageAccordingToPreferences() {
  recordPreferences();
  switch (localStorage.getItem('background-color')) {
    case 'black':
      darkMode.innerText = 'On';
      break;
    case 'white':
      darkMode.innerText = 'Off';
      break;
  }
  
  if (localStorage.length !== 0) {
    const body = document.body;
    body.style.backgroundColor = localStorage.getItem('background-color');

    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
      p.style.fontFamily = localStorage.getItem('font-family');
      p.style.color = localStorage.getItem('font-color');
      p.style.fontSize = `${localStorage.getItem('font-size')}px`;
      p.style.lineHeight = `${localStorage.getItem('line-height')}px`
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
  localStorage.setItem('line-height', '25px');
  localStorage.setItem('font-color', 'black');
  localStorage.setItem('background-color', 'white');
}

buttonApply.addEventListener('click', setPageAccordingToPreferences);

window.onload = function() {
  if (localStorage.length === 0) {
    setDefaultPreferences();
    onLoadLabelColor();
    setPageAccordingToPreferences();
  } else {
    onLoadLabelColor();
    setPageAccordingToPreferences();
  }
}