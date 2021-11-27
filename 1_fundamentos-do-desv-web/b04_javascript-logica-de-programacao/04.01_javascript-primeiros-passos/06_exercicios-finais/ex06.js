// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// - Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = 'Bispo';

switch (peca.toLowerCase()) {
    case 'peão':
        console.log('PEÃO: apenas para frente, não pode retornar')
        break;
    case 'cavalo':
        console.log('CAVALO: se move em L.');
        break;
    case 'bispo':
        console.log('BISPO: apenas diagonais.');
        break;
    case 'torre':
        console.log('TORRE: apenas horizontais e verticais.');
        break;
    case 'rainha':
        console.log('RAINHA: horizontais, verticais e diagonais.');
        break;
    case 'rei':
        console.log('REI: horizontais, verticais e diagonais, mas apenas uma casa por turno.')
    default:
        console.log('ERRO: peça inválida');
        break;
}