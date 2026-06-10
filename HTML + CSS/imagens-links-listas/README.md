# Imagens, links e listas

## Listas

Como o próprio nome sugere, elas formas listas de itens que serão exibidos

Toda lista possui um item, que é definido pela tag `<li></li>`

Uma lista pode ser não ordenada `<ul></ul>` ou ordenada `<ol></ol>`

```html
<!-- Lista não ordenada -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Lista não ordenada -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

As listas ordenadas possuem um atributo chamado type, esse atributo recebe o valor inicial da forma que a ordem será exibida

Por exemplo, podemos definir 1 para que seja ordenada de forma numérica, ou A para usar a ordem alfabética, mas com letras maiúsculas, ou a para exibir com letras minúsculas

Detalhe que a exibição numérica é a padrão

```html
<!-- Exibição numérica (padrão) -->
<ol type="1">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Exibição alfabética maiúscula -->
<ol type="A">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Exibição alfabética minúscula -->
<ol type="a">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Exibição em algarismos romano maiúscula -->
<ol type="I">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Exibição em algarismos romano minúscula -->
<ol type="i">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

## Links

Os links no html são tags que permitem que o usuário vá para outras páginas do meu projeto, sites externos, emails, telefones e elementos da página

Todo link possui um atributo chamado href, ele armazena o destino

```html
<!-- Link de navegação interna -->
<a href="pagina.html">Página</a>

<!-- Link de navegação externa -->
<a href="https://site.com">Site</a>

<!-- Link de email -->
<a href="mailto:johndoe@email.com">Envie um e-mail para alguém</a>

<!-- Link de telefone -->
<a href="tel:+5511999999999">Ligue para um número</a>

<!-- Link para acessar alguma parte da página atual -->
<a href="#kaboom">Focar em uma parte do site com o identificador "kaboom"</a>
```

A tag de link também possui outros atributos

### 1. target

Especifica onde o documento será aberto

Por padrão ele é aberto na mesma aba, mas podemos, por exemplo, usar o valor \_blank para abrir a página em outra aba do navegador

```html
<a href="https://site.com" target="_blank">Link externo</a>
```

### 2. rel

Define a relação entre o documento atual e o link

Por segurança usamos o valor "noopener", para evitar que a nova página controle a página de origem

```html
<a href="https://site.com" target="_blank" rel="noopener">Link externo</a>
```

### 3. download

Faz com que o link seja para baixar algo no lugar de navegação

Nesse caso podemos colocar a localização de um arquivo no href

```html
<a href="image.jpg" download>Baixar imagem agora</a>
```

## Imagens

Para exbir uma imagem usamos a tag `<img />`

Ela precisa de um atributo obrigatório, o src. Ele recebe a localização da imagem, podendo ser um link externo ou a localização do arquivo no projeto

```html
<img src="image.png" />
```

Também é altamente recomendado usar o atributo alt. Ele define um texto alternativo relacionado a imagem

Isso é útil para mecanismos de acessibilidade

```html
<img src="image.png" alt="Descrição alternativa referente a imagem" />
```

A largura e altura também podem ser definidas via HTML - apesar de ser possível mudar pelo css

São dois atributos, width e height. Porém definir apenas o width faz com que ela mude de tamanho de forma proporcional

```html
<img
  src="image.png"
  alt="Descrição alternativa referente a imagem"
  width="300"
/>

<!-- Se a altura for definida explicitamente, será necessário tomar cuidado para não distorcer a imagem -->
<img
  src="image.png"
  alt="Descrição alternativa referente a imagem"
  width="300"
  height="250"
/>
```
