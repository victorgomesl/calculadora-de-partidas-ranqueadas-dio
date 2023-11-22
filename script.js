function calcular() {
  const vitoriasInput = document.getElementById('vitorias');
  const derrotasInput = document.getElementById('derrotas');
  const resultadoElement = document.querySelector('.result p');
  const resultDiv = document.getElementById('resultado');

  const vitorias = parseInt(vitoriasInput.value);
  const derrotas = parseInt(derrotasInput.value);

  if (isNaN(vitorias) || isNaN(derrotas) || vitoriasInput.value === '' || derrotasInput.value === '') {
    resultadoElement.innerText = 'Por favor, insira valores válidos para vitórias e derrotas.';
    resultDiv.style.display = 'block';
  } else {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias > 20 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias > 50 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias > 80 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias > 90 && vitorias <= 100) {
      nivel = 'Lendário';
    } else {
      nivel = 'Imortal';
    }

    const resultadoText = `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
    resultadoElement.innerText = resultadoText;
    resultDiv.style.display = 'block';
  }
}

function fecharResultado() {
  const resultDiv = document.getElementById('resultado');
  resultDiv.style.display = 'none';
}
