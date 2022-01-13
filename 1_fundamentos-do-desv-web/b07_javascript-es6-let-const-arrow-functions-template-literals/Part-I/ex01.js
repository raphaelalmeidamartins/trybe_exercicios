const testingScope = (escope) => {
  console.log(`Não devo ser utilizada fora do meu escopo (${escope ? 'if' : 'else'})`);
}

testingScope(true);
