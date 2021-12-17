// ex01
function soma(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

function subtracao(a, b) {
  return `${a} - ${b} = ${a - b}`;
}

function multiplicacao(a, b) {
  return `${a} * ${b} = ${a * b}`
}

function divisao(a, b) {
  return `${a} / ${b} = ${a / b}`
}

function modulo(a, b) {
  return `${a} % ${b} = ${a % b}`
}

// ex02
function maiorNum(a, b) {
  switch (true) {
    case (a > b):
      return a;
    case (a < b):
      return b;
    case (a === b):
      return 'Eles são iguais';
  }
}

// ex03
function maiorDe3(a, b, c) {
  let maiorDos3;
  if (a >= b) {
    maiorDos3 = a;
  } else {
    maiorDos3 = b;
  }
  if (maiorDos3 >= c) {
    maiorDos3 = maiorDos3;
  } else {
    maiorDos3 = c;
  }
  return maiorDos3;
}

// ex04
function positiveOrNegative(num) {
  switch (true) {
    case (num > 0):
      return 'positive';
    case (num < 0):
      return 'negative';
    case (num === 0):
      return 'zero';
  }
}

// ex05
function triangleCheck(angulo1, angulo2, angulo3) {
  let somaAngulos = angulo1 + angulo2 + angulo3;
  if (somaAngulos === 180 && somaAngulos > 0) {
    return 'É um triângulo';
  } else {
    return 'Não é um triângulo';
  }
}

// ex06
function pecasXadrez(peca) {
  switch (peca.toLowerCase()) {
    case 'peão':
      return 'PEÃO: apenas para frente, não pode retornar';
    case 'cavalo':
      return 'CAVALO: se move em L.';
    case 'bispo':
      return 'BISPO: apenas diagonais.';
    case 'torre':
      return 'TORRE: apenas horizontais e verticais.';
    case 'rainha':
      return 'RAINHA: horizontais, verticais e diagonais.';
    case 'rei':
      return 'REI: horizontais, verticais e diagonais, mas apenas uma casa por turno.';
    default:
      return 'ERRO: peça inválida';
  }
}

// ex07
function converteNota(nota) {
  switch (true) {
    case (nota >= 90 && nota < 100):
      return 'A';
    case (nota >= 80 && nota < 90):
      return 'B';
    case (nota >= 70 && nota < 80):
      return 'C';
    case (nota >= 60 && nota < 70):
      return 'D';
    case (nota >= 50 && nota < 60):
      return 'E';
    case (nota < 50 && nota >= 0):
      return 'F';
    case (nota > 100 || nota < 0):
      return 'ERRO: nota inválida. Insira um valor entre 0 e 100.';
  }
}

// ex08
function algumPar(a, b, c) {
  if ((a % 2) == 0 || (b % 2) == 0 || (c % 2) == 0 ) {
    return true;
  }
  return false;
}

// ex09
function algumImpar(a, b, c) {
  if ((a % 2) != 0 || (b % 2) != 0 || (c % 2) != 0 ) {
    return true;
  }
  return false;
}

// ex10
function qualLucro(valorVenda, valorCusto) {
  let impostoSobreOCusto = valorCusto * 0.20;
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  if (valorCusto < 0 || valorCusto < 0 ) {
      return "ERRO: valores inválidos. Os valores de custo e venda precisam ser maiores que 0.";
  }
  return lucro * 1000;
}

// ex11
function qualSalarioBase(salarioBruto) {
  switch (true) {
    case (salarioBruto <= 1566.94):
      return salarioBruto - (salarioBruto * 0.08);
    case (salarioBruto > 1566.94 && salarioBruto <= 2594.92):
      return salarioBruto - (salarioBruto * 0.09);
    case (salarioBruto > 2594.92 && salarioBruto <= 5189.82):
      return salarioBruto - (salarioBruto * 0.11);
    case (salarioBruto > 5189.82):
      return salarioBruto - 570.88;
  }
}

function qualSalarioLiquido(salarioBruto) {
  const salarioBase = qualSalarioBase(salarioBruto);
  switch (true) {
    case (salarioBase <= 1903.98):
      return salarioBase;
    case (salarioBase > 1903.98 && salarioBase <= 2826.65):
      return salarioBase - ((salarioBase * 0.075) - 142.80);
    case (salarioBase > 2826.65 && salarioBase <= 3751.05):
      return salarioBase - ((salarioBase * 0.15) - 354.80);
    case (salarioBase > 3751.05 && salarioBase <= 4664.68):
      return salarioBase - ((salarioBase * 0.225) - 636.13);
    case (salarioBase > 4664.68):
      return salarioBase - ((salarioBase * 0.275) - 869.36);
  }
}
