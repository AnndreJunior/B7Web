# Criar, inserir e remover elementos

Podemos criar um elemento usando `document.createElement(elemento)`. Isso criará um node em memória que poderá ser usado no meu DOM.

```javascript
// Cria elemento h1
const h1 = document.createElememt("h1");

h1.innerText = "Texto do título";

// Adiciona elemento ao body
document.body.appendChild(h1);
```

**Nota:** o `document.appendChild(node)` adiciona um elemento como filho direto de um elemento, nesse caso o body. Considerando uma lista, por exemplo, podemos criar uma li com javascript e adicionar usando essa função.

```html
<body>
  <ul>
    <li>A</li>
    <li>B</li>
  </ul>
</body>
```

```javascript
const list = document.querySelector("ul");
const li = document.createElement("li");
li.innerText = "C";
list.appendChild(li); // Será adicionado ao final do ul
```
