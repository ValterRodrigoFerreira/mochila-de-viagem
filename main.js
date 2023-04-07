const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nomeItem = evento.target.elements["nome"];
  const quantidadeItem = evento.target.elements["quantidade"];

  criaItem(nomeItem.value, quantidadeItem.value);

  nomeItem.value = "";
  quantidadeItem.value = "";
});

function criaItem(nomeItem, quantidadeItem) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidadeItem;

  novoItem.appendChild(numeroItem);

  novoItem.innerHTML += nomeItem;
  lista.appendChild(novoItem);
}
