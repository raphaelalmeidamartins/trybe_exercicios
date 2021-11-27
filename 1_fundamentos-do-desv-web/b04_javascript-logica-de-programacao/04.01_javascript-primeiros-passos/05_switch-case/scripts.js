let statusCandidato = 'aprovado(a)';

switch (statusCandidato) {
    case 'aprovado(a)':
        console.log('Parabéns, você foi aprovado(a)');
        break;
    
    case 'lista':
        console.log('Você está na lista de espera');
        break;
    
    case 'reprovado(a)':
        console.log('Você foi reprovado(a)');
        break;

    default:
        console.log('Não se aplica');
}

