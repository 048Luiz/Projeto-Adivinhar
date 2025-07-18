let resposta = document.getElementById("resp");
let caixadenumero = document.getElementById("boxnumero");
let numeroaleatorio = Math.floor(Math.random() * 100);

function verificar() {
  let palpite = Number(caixadenumero.value);

  if (numeroaleatorio < palpite) {
    resposta.innerHTML = "O número é menor.";
  } else if (numeroaleatorio > palpite) {
    resposta.innerHTML = "O número é maior.";
  } else {
    resposta.innerHTML = `Parabéns, Você acertou! O número era ${numeroaleatorio}!`;
  }
}
