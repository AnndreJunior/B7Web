# Imagens responsivas

## Picture

Podemos definir diferentes imagens a depender do tamanho da tela. Isso significa que podemos ter a mesma imagem em resoluções diferentes e ir usando cada uma.

Para isso usamos a tag picture, dentro dela definimos uma tag img que será a imagem padrão e tags source que irão conter outras imagens que serão exibidas conforme o tamanho da tela.

**Exemplo:**

```html
<picture>
  <!-- Imagem padrão -->
  <img src="image.png" />

  <!-- Imagem para mobile -->
  <!-- Essa imagem será usada a partir de 399px -->
  <source media="(min-width: 400px)" srcset="image-mobile.png" />

  <!-- Imagem para tablet -->
  <!-- Essa imagem será usada a partir de 599px -->
  <source media="(min-width: 600px)" srcset="image-tablet.png" />

  <!-- Também podemos usar o max-width no lugar do min-width -->
</picture>
```
