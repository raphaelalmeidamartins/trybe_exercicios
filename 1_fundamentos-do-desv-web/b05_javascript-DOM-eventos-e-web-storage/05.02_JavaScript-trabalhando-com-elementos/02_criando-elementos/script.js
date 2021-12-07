// 1 - Crie um irmão para elementoOndeVoceEsta . 
let newSection = document.createElement('section');

document.getElementById('elementoOndeVoceEsta').parentElement.appendChild(newSection);

// 2 -  Crie um filho para elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').appendChild(newSection);

// 3 - Crie um filho para primeiroFilhoDoFilho . 
document.getElementById('primeiroFilhoDoFilho').appendChild(newSection);

// 4 - A partir desse filho criado, acesse terceiroFilho . 
let newChildCreated = document.getElementById('primeiroFilhoDoFilho').firstElementChild;

console.log(newChildCreated.parentElement.parentElement.nextElementSibling);