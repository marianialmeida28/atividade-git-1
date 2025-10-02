function mostrarMensagem() {
  alert("Você clicou no botão!");
}
function mudarCorDeFundo() {
  document.body.style.backgroundColor = "#e0f7fa";
}
function mostrarDataHora() {
  const agora = new Date();
  alert("Data e hora atual: " + agora.toLocaleString());
}