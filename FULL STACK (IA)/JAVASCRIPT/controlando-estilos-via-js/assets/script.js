let titulo = document.querySelector("h1");
let lista = document.querySelector("ul");
let nomeInput = document.querySelector("#nome");

console.log(titulo.textContent);
console.log(lista.textContent);

// Aqui ele armazena o conteúdo HTML do elemento
console.log(lista.innerHTML);

// Valor digitado no input
console.log(nomeInput.value);

// Acessa o atributo "name"
console.log(nomeInput.getAttribute("type"));

// Sobrescreve o atributo "type"
nomeInput.setAttribute("type", "password");

// Adiciona o atributo "class"
nomeInput.setAttribute("class", "nome");

// Modificar conteúdo do h1
// Aqui todo o conteúdo será interpretado como texto, mesmo colocando tags
titulo.innerText = "Novo título da página";

// Modificar estrutura HTML do h1
// Aqui será interpretato como HTML
titulo.innerHTML = "Novo <i>título</i> da página";

let listaItens = document.querySelectorAll("li");

// Deixa o conteúdo das LIs em caixa alta
listaItens.forEach((item) => {
  item.innerText = item.innerText.toUpperCase();
});
