const testingScope = (escope) => {
  const message = 'Não devo ser utilizada fora do meu escopo';
  if (escope) {
    console.log(`${message} (if)`);
  } else {
    console.log(`${message} (else)`);
  }
}

testingScope(false);
