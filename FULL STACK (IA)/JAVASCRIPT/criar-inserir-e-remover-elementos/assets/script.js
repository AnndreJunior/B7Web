// Cria elemento h1 na memória
let h1 = document.createElement("h1");

// Adiciona texto ao h1
h1.innerText = "Teste";

// Adiciona elemento no body
// Essa função adiciona no topo
document.body.prepend(h1);

const list = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "C";
list.appendChild(li); // Será adicionado ao final do ul

exibirListaDeCompras();

function exibirListaDeCompras() {
  const listaComprasOl = document.getElementById("listaCompras");
  const listaCompras = [
    {
      nome: "Arroz",
      quantidade: 15,
    },
    {
      nome: "Feijão",
      quantidade: 20,
    },
    {
      nome: "Macarrão",
      quantidade: 3,
    },
  ];

  listaCompras.forEach((produto) => {
    const itemLista = document.createElement("li");

    itemLista.innerHTML = `<strong>${produto.nome}</strong> - ${produto.quantidade}`;

    listaComprasOl.appendChild(itemLista);
  });
}
