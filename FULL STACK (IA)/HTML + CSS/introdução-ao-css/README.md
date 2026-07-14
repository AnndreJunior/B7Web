# Introdução ao CSS

CSS (Cascading Style Sheets) é a linguagem que permite estilizar as páginas html.
Ela pode ser usada das seguintes formas, com menos prioridade até a com mais prioridade:

- Arquivo externo importado pela tag `<link />` dentro da tag `<head></head>`
- Tag `<style></style>` dentro da tag `<head></head>`
- Css inline por meio do atributo style

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="stylesheet" href="path/to/style.css" />
    <!-- A importação do arquivo CSS é feito assim -->

    <style>
      /* Estilização interna */
    </style>
  </head>
  <body>
    <h1>Título</h1>
    <p style="/* Estilização inline */">Texto com estilo inline</p>
  </body>
</html>
```

**Nota:** é recomendado o uso de CSS em arquivos externos e eventualmente o uso do css inline para algo mais específico

A definição de estilos ocorre da seguinte forma: precisamos dizer o que vamos estilizar e depois quais serão esses estilos.

```css
elemento {
  estilo: valor;
}
```

Por exemplo, vamos dizer que o corpo do conteúdo do html será rosa.

```css
body {
  background-color: pink;
}
```

**Nota:** vamos considerar sempre o uso de um arquivo externo, porém a mesma regra vale para a tag `<style></style>`.
A exceção é a estilização inline, pois é direto na tag.

Também podemos selecionar uma tag pela class ou pelo id dele.

Para acessar pela class usamos .classname. Para id usamos #id.

```css
.classname {
  color: red;
}

#id {
  background-color: yellow;
}
```

Também podemos fazer meio que uma "seleção em camadas". Isso seria tipo "modifique a tag x, que está dentro da tag y e que está dentro da tag z"

No código CSS essa listagem é feita por espaços. Por exemplo, vamos supor que queremos estilizar o input do seguinte código:

```html
<form>
  <label>
    <span>Email:</span>
    <input type="email" />
  </label>
</form>
```

```css
form label input {
  border: 1px solid #ccc;
}
```

Para aplicar um estilo em vários elementos é parecido, mas os elementos são separados por vírgula.

```css
/* Aqui será aplicado uma borda no form, no label e no input */
form,
label,
input {
  border: 1px solid #ccc;
}
```
