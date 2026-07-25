let lista = ["farinha", "frango", "sal", "corante"];
console.log(lista);

console.log(`Quantidade de itens na lista ${lista.length}`);

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

console.log("Loop funcional com forEach");
lista.forEach((item) => console.log(item));

console.log("Remover o último item do array");
lista.pop();
console.log(lista);

console.log("Remover o primeiro item do array");
lista.shift();
console.log(lista);

console.log("Restaurando estado do array");
lista = ["farinha", "frango", "sal", "corante"];

let farinha = lista.find((item) => item === "farinha");
console.log(farinha);

let queijo = lista.find((item) => item === "queijo");
console.log(queijo || "Não tem queijo '-'");

let lista2 = lista.map((item) => item.toUpperCase());
console.log(lista2);

lista2 = lista.filter((item) => item.length >= 4);
console.log(lista2);
