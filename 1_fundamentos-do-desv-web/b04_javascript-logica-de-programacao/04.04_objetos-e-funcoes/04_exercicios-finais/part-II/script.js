
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. 
function ePalindromo(string) {
  let reverseString = string.split('');
  reverseString = reverseString.reverse();
  reverseString = reverseString.join('');
  if(string === reverseString){
    return true;
  }
  return false;
}

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceMaiorValor(arrayNumbers) {
  let maiorNum = arrayNumbers[0];
  for (const num of arrayNumbers) {
    if (num > maiorNum) {
      maiorNum = num;
    }
  }
  for (const key in arrayNumbers) {
    if (arrayNumbers[key] === maiorNum) {
      return key;
    }
  }
}

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 
function indiceMenorValor(arrayNumbers) {
  let menorNum = arrayNumbers[0];
  for (const num of arrayNumbers) {
    if (num < menorNum) {
      menorNum = num;
    }
  }
  for (const key in arrayNumbers) {
    if (arrayNumbers[key] === menorNum) {
      return key;
    }
  }
}

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(arrayNames) {
  let maiorName = arrayNames[0];
  for (const name of arrayNames) {
    if (name.length > maiorName.length) {
      maiorName = name;
    }
  }
  return maiorName;
}

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 
function numQueMaisRepete(arrayNumbers) {
  let contadorCurrentNum = 0;
  let contador = 0;
  let numeroQueRepete;
  for (const currentNum of arrayNumbers) {
    contadorCurrentNum = 0;
    for (const num of arrayNumbers) {
      if (num === currentNum) {
        contadorCurrentNum += 1;
      }
    }
    if (contadorCurrentNum > contador) {
      contador = contadorCurrentNum;
      numeroQueRepete = currentNum;
    }
  }
  return numeroQueRepete;
}

// 6 - Crie uma função que receba um número natural N e retorne o somatório de todos os números de 0 até N. 
function somatorio(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . 
function wordEnding(word, ending) {
  let wordReverse = word.split('');
  wordReverse = wordReverse.reverse();
  let endingSplited = ending.split('');
  endingSplited = endingSplited.reverse();
  if (endingSplited.length > wordReverse.length) {
    return false;
  }
  for (let i = 0; i < endingSplited.length; i += 1) {
    if (wordReverse[i] !== endingSplited[i]) {
      return false;
    }
  }
  return true;
}

