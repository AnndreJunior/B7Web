# Introdução ao DOM

O DOM (Document Object Model) é a forma que os elementos HTML são armazenados na memória do navegador. Essa represetação em árvore é o que permite que o javascript acesse os elementos.

Para manipular essas tags, usamos a variável document.

A partir do DOM podemos adicionar tags, modificar estilo, conteúdo, remover tags e adicionar interatividade com o usuário.

Podemos acessar eles elementos de várias formas:

## 1. querySelector

Podemos usar a função document.querySelector para acessar por meio de classes, identificadores ou tags.

Essa função retorna apenas um elemento, então ele vai pegar o primeiro da nossa árvore DOM.

```javascript
let title = document.querySelector("h1"); // Acessa pela tag
let section = document.querySelector(".section"); // Acessa pela classe
let link = document.querySelector("#link"); // Acessa pelo id
```

## 2. getElementById

Também temos uma função específica para acessar um elemento pelo id: getElementById.

```javascript
let elemento = document.getElementById("identificador");
```

## 3. querySelectorAll

A função document.querySelectorAll acessa todos os elementos com o mesmo identificador (seja o nome da tag ou classe). Seu retorno é um array.

**Nota:** todos esses métodos retornam os elementos e a partir deles posso modificar estilo, conteúdo, propriedades...
