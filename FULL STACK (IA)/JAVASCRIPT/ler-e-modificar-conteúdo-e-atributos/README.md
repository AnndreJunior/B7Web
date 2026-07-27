# Ler e modificar conteúdo e atributos

Como foi dito anteriormente, podemos ler e modificar o HTML por meio de scripts js.

Para ler o conteúdo de uma tag, por exemplo um `h1`, podemos usar a propriedade `document.textContent`.

```javascript
let titulo = document.querySelector("h1");
console.log(titulo.textContent);
```

Outra propriedade que pode ser utilizada é o `document.innterText`.

```javascript
let titulo = document.querySelector("h1");
console.log(titulo.innerText);
```

**Nota:** Mesmo com elemetos filhos, ele retorna apenas o conteúdo do elemento.

A propriedade `document.innterHTML` armazena o conteúdo HTML do elemento. Ou seja, esse também irá incluir tags filha.

```html
<h1>Hello <i>World</i>!</h1>
```

```javascript
let titulo = document.querySelector("h1");
console.log(titulo.innerHTML); // Saída: Hello <i>World</i>!
```

Nas tags de input, usamos o `document.value` para acessar o valor digitado no input.

```html
<input type="text" name="foo" id="foo" />
```

```javascript
let fooInput = document.querySelector("#foo");
console.log(fooInput.value);
```

Para acessar um atributo usamos `document.getAttribute(name)`

```javascript
let fooInput = document.querySelector("#foo");
console.log(fooInput.getAttribute("name"));
```

Podemos alterar/modificar o atributo de uma tag usando `document.setAttribute(name, value)`.

```html
<input type="text" name="foo" id="id" />
```

```javascript
let fooInput = document.querySelector("#foo");
fooInput.setAttribute("id", "new-id"); // Modifica id
fooInput.setAttribute("class", "lorem"); // Adiciona o atributo "class" com valor "lorem"
```

Podemos definir o conteúdo (seja puramente textual ou HTML) modificando os valores de innerText e innerHtml.

```html
<h1>Título</h1>
```

```javascript
let titulo = document.querySelector("h1");

titulo.innerText = "Novo título da página";
titulo.innerHTML = "Novo <i>título</i> da página";
```
