# Introdução ao javascript

O javascript é introduzido na página por meio da tag script. Nela podemos escrever todo o comportamento da página.

```html
<script>
  console.log("Hello World!");
</script>
```

Essa tag também possui um atributo chamado src, nele podemos definir um arquivo de extensão .js dentro da nossa página (que é a abordagem mais recomendada), evitando assim escrever código javascript diretamente dentro da página.

```html
<script src="/assets/js/app.js"></script>
```

```javascript
/* /assets/js/app.js */

console.log("Hello World!");
```

A linguagem javascript é usado nas páginas web para manipular seus elementos, ou seja ele precisa ser carregado após todo o conteúdo (tags, atributos, estilos).

Podemos chamar esse script de duas formas: no fim da tag body ou head usando o atributo "defer" para forçar o carregamento do script em paralelo como o carregamento da página e executa após carregar todo o conteúdo da página.

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Introdução ao javascript</title>
    <link rel="stylesheet" href="/assets/css/app.css" />

    <!-- Scripts Javascript devem ser carregados após o conteúdo do body -->
    <!-- Podemos colocar a tag script no fim do body ou usar o atributo "defer", como no exemplo abaixo -->
    <script defer src="/assets/js/app.js"></script>
  </head>
  <body>
    <h1>Título da página</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script src="/assets/js/app.js"></script>
  </body>
</html>
```
