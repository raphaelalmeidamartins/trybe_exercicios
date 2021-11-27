const notaCandidato = 80;

if (notaCandidato >= 80) {
    console.log('Parabéns, você foi aprovado(a)');
} else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log('Você está na lista de espera');
} else {
    console.log('Você foi reprovado(a)')
}