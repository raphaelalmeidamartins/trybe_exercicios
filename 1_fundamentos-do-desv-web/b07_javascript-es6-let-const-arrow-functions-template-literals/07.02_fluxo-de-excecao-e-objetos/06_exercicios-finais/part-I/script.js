const verifyInputs = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error('Erro: campos vazios.');
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Erro: por favor, insira valores númericos.');
  }
}

function sum() {
  const input1 = document.getElementById('value1');
  const input2 = document.getElementById('value2');
  try {
    verifyInputs(input1.value, input2.value);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = error.message;
  } finally {
    input1.value = '';
    input2.value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
