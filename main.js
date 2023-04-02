const formulario = document.getElementById("novoItem");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  console.log(evento);
  console.log(evento.target.elements["nome"].value);
  console.log(evento.target.elements["quantidade"].value);
});
