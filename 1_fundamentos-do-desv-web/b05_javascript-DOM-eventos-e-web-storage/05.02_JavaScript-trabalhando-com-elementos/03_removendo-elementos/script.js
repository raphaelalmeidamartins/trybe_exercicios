// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho . 

document.getElementById('pai').firstElementChild.remove();
document.getElementById('elementoOndeVoceEsta').firstElementChild.nextElementSibling.remove();
document.getElementById('terceiroFilho').nextElementSibling.remove();
document.getElementById('terceiroFilho').remove();