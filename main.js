const formulario = document.getElementById("novoItem");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const itemNome = evento.target.elements["nome"];
  const itemQuantidade = evento.target.elements["quantidade"];

  criaItem(itemNome.value, itemQuantidade.value);

  itemNome.value = "";
  itemQuantidade.value = "";
});

function criaItem(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);

  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}
