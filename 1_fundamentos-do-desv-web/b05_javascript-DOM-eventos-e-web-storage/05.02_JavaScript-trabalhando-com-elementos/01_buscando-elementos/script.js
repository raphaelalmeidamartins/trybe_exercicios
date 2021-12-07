// 1 - Acesse o elemento elementoOndeVoceEsta . 
console.log(document.getElementById('elementoOndeVoceEsta').parentElement);

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerHTML = '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum corporis distinctio adipisci eum temporibus quia sunt eos ipsam nostrum, earum mollitia accusamus recusandae minus necessitatibus consequuntur molestias iure. Facere?</p>'

// 4 - Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById('pai').firstElementChild);

// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta . 
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling);

// 8 - Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);