# Media query

As principais anotações sobre media query estão salnvas nas anotações referentes ao curso [Full Stack com IA](<../../../../FULL%20STACK%20(IA)/>).

Neste README terão algumas anotações complementares do curso "antigo".

## Print only

Podemos mudar os estilos no ato da impressão da página (quando pressionamos ctrl + p). Para isso usamos media only print.

```css
/* Modifica os estilos dos elementos selecionados aqui no momento que for imprimir a página */
@media only print {
  h1 {
    font-size: 20px;
    font-weight: normal;
  }

  /* Demais... */
}
```

## Orientation

Também podemos definir oq fazer com os elementos dependendo da orientação da tela (vertical ou horizontal). Para isso usandos a propriedade orientation no media query com um desses valores: landscape (horizontal) ou portrait (vertical).

Considerando o seguinte html:

```html
<div class="box">
  <div>Elemento A</div>
  <div>Elemento B</div>
  <div>Elemento C</div>
</div>
```

```css
.box {
  display: flex;
  flex-direction: column;
}

@media (orientation: landscape) {
  .box {
    flex-direction: row;
  }
}
```

Aqui os elementos por padrão serão flex com direção de coluna. Quando a orientação for horizontal, então a direção será do tipo linha para serem exibidos lado a lado.

**Nota:** ele se baseia na proporção, então se a altura for maior que a largura, então ele vai tratar como se a tela estivesse de pé.
