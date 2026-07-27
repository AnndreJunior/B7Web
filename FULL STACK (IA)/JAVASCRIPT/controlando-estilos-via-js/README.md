# Controlar estilos via js

Podemos usar javascript para manipular as estilizações de forma dinâmica.

Podemos usar o atributo `document.style` e a partir dele modificar diferentes propriedades.

```javascript
let titulo = document.querySelector("h1");
titulo.style.background = "#ff0000";
```

A prática mais recomendada é definir estilos por meio de classes e adicionar/remover elas via js conforme necessário.

```html
<h1>Título</h1>
```

```css
.titulo-pequeno {
  font-size: 20px;
}
```

```javascript
let titulo = document.querySelector("h1");
titulo.classList.add("titulo-pequeno");
```

Podemos verificar se uma classe existe usando o `document.classList.contains(nome)`.

```javascript
let foo = document.querySelector("#foo");
if (foo.classList.contains("bar")) {
  // do something
}
```

Podemos usar o `document.classList.remove(nome)` para remover uma classe.

```javascript
let titulo = document.querySelector("h1");
titulo.classList.remove("titulo-pequeno");
```

O `document.classList.toggle(nome)` alterna a classe. Se ela existir, remove, se não, adiciona. Ela retorna booleano, sendo `true` caso adicione a `false` caso ela remova.

```javascript
let titulo = document.querySelector("h1");
titulo.classList.toggle("titulo-pequeno");
```
