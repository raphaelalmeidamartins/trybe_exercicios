//Depois, faça uma pirâmide com n asteriscos de base: 
//Me inspirei neste vídeo para resolver esse exercício https://youtu.be/xzstcj3Cuso

let n = 11;
let centroN = (n + 1)/2;
let stringLinha = '';

if (n % 2 === 0) {
  console.log('O número precisa ser ímpar');
} else {
  for (let linha = 0; linha < centroN; linha += 1) {
    for (let coluna = 1; coluna < (centroN - linha); coluna += 1) {
      stringLinha += ' ';
    }
    for (let coluna = 0; coluna <= linha; coluna += 1) {
      stringLinha += '*';
    }
    for (let coluna = 0; coluna < linha; coluna += 1) {
      stringLinha += '*';
    }
    for (let coluna = 1; coluna < (centroN - linha); coluna += 1) {
      stringLinha += ' ';
    }
    console.log(stringLinha);
    stringLinha = '';
  }
}