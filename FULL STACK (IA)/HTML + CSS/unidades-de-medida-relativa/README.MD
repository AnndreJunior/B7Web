# Unidades de medida relativa

As unidades de medida relativas adaptam o tamanho do elemento dependendo do que estiver acontecendo no elemento pai. Algumas são mais usadas em fontes e outras na estrutura do site.

## Principais unidades de medida

### 1. em e rem

São unidades que dependem do tamanho da fonte de outros elementos.

No caso do rem, ele vai usar como base o font-size do elemento root, no caso da tag html (geralmente o seu font-size padrão é 16px).

Se dissermos que determinado elemento possui 3rem, então será 3 \* font-size do root.

No caso do em, ele usa como base o font-size do elemento pai direto. Aqui é interessante, por exemplo, podemos dizer que o html e o body possuem font-size de 18px, então uma div com classe "foo" possui font-size de 2rem e outra div dentro dela possui font-size de 3em. A div com classe "foo" possui 32px e sua div filha possui 96px.

**Nota:** é preciso ter cuidado com o efeito cascata do em se usarmos ele em muitos elementos aninhados.

<table>
  <thead>
    <tr>
      <th align="left">Cenário</th>
      <th align="center">Unidade recomendada</th>
      <th align="left">Motivo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tipografia global e tamanho de fonte</td>
      <td align="center"><code>rem</code></td>
      <td>
        Evita o efeito cascata e garante que os tamanhos sejam previsíveis.<br/>
        Respeita as configurações de acessibilidade do usuário.
      </td>
    </tr>
    <tr>
      <td>Espaçamentos gerais (margins e paddings do layout)</td>
      <td align="center"><code>rem</code></td>
      <td>
        Mantém a consistência estrutural das seções do site,<br/>
        independentemente do tamanho da fonte dentro daquela seção.
      </td>
    </tr>
    <tr>
      <td>Componentes modulares (ex: Botões, Cards)</td>
      <td align="center"><code>em</code></td>
      <td>
        Excelente para escalabilidade local. Se você definir o padding<br/>
        de um botão em em, o botão inteiro (texto e espaçamento) crescerá<br/>
        ou encolherá proporcionalmente apenas alterando o font-size daquele botão específico.
      </td>
    </tr>
  </tbody>
</table>

Alguns exemplos de uso:

```html
<div class="container-rem">
  Texto do Container
  <div class="filho-rem">
    Filho com REM
    <div class="neto-rem">Neto com REM</div>
  </div>
</div>

<hr />

<div class="container-em">
  Texto do Container
  <div class="filho-em">
    Filho com EM
    <div class="neto-em">Neto com EM</div>
  </div>
</div>
```

```css
/* Define o tamanho raiz. Padrão geralmente é 16px, mas vamos forçar para ficar claro. */
html {
  font-size: 16px;
}

/* --- COMPORTAMENTO DO REM --- */
.container-rem {
  font-size: 20px; /* Definimos um tamanho fixo aqui */
}

.filho-rem {
  font-size: 2rem; /* 2 * 16px (raiz) = 32px */
}

.neto-rem {
  font-size: 2rem; /* 2 * 16px (raiz) = 32px. Permanece consistente! */
}

/* --- COMPORTAMENTO DO EM --- */
.container-em {
  font-size: 20px; /* Tamanho base do pai */
}

.filho-em {
  font-size: 2em; /* 2 * 20px (pai) = 40px */
}

.neto-em {
  font-size: 2em; /* 2 * 40px (pai atual/filho-em) = 80px! Efeito cascata. */
}
```

Um bom exemplo de uso é criar um botão escalável, usando em nas margens e paddings, mantendo a consistência.

```css
.botao {
  /* Tamanho de fonte padrão do botão definido em rem para previsibilidade */
  font-size: 1rem;

  /* Paddings e bordas definidos em em. 
     Eles vão escalar com base no font-size acima. */
  padding: 0.5em 1em;
  border-radius: 0.25em;
}

.botao-gigante {
  /* Ao mudar apenas a fonte, o padding e o border-radius aumentam proporcionalmente! */
  font-size: 2rem;
}
```

### 2. Porcentagem

Essa unidade de medida se baseia no espaço disponível para o elemento. Por exemplo, uma div pode pegar 80% da tela e dentro dessa div podemos ter outra div que pega 40% do espaço disponível (40% dos 80% da tela da div pai).

Um exemplo de uso comum é definirmos um width de 100% e um max-width para não quebrar o layout de tanto esticar.

Normalmente usamos para estruturas do layout, enquanto usamos rem e em para fontes.

Alguns exemplos de uso:

```html
<div class="pai-porcentagem">
  <div class="filho-80">
    80% do pai
    <div class="neto-50">50% do filho (ou 40% do pai original)</div>
  </div>
  <div class="filho-50">50% do pai</div>
</div>

<hr />

<div class="responsivo">
  <div class="sidebar">30% de largura (sidebar)</div>
  <div class="conteudo">70% de largura (conteúdo principal)</div>
</div>
```

```css
/* --- COMPORTAMENTO DA PORCENTAGEM --- */

/* Container pai que ocupa 80% da largura da tela */
.pai-porcentagem {
  width: 80%;
  background-color: #f0f0f0;
  padding: 10px;
}

/* Ocupa 80% da largura do pai */
.filho-80 {
  width: 80%;
  background-color: #d0e8ff;
  padding: 5px;
}

/* Ocupa 50% da largura do pai imediato (filho-80).
   Ou seja, 50% de 80% = 40% da largura total */
.neto-50 {
  width: 50%;
  background-color: #b0d4f1;
  padding: 5px;
}

/* Ocupa 50% da largura do pai-porcentagem */
.filho-50 {
  width: 50%;
  background-color: #ffe0b0;
  padding: 5px;
}

/* --- LAYOUT COM SIDEBAR E CONTEÚDO --- */

.responsivo {
  width: 100%;
  max-width: 1200px; /* Evita que estique demais em telas grandes */
  margin: 0 auto; /* Centraliza na tela */
  display: flex;
}

.sidebar {
  width: 30%;
  background-color: #e0e0e0;
}

.conteudo {
  width: 70%;
  background-color: #ffffff;
}
```

### 3. Viewports

As viewports usam como base o espaço disponível da tela inteira, diferente da porcentagem que vai do espaçõ disponível do elemento, então ele depende dos elementos pai.

Por exemplo, se definirmos que um elemento vai ter altura de 100vh, então, a partir do que ele tem disponível, vai ocupar toda a altura do elemento.

```html
<div class="view-height">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae neque
  aliquam eveniet veritatis sunt vero optio, nemo placeat impedit laborum
  temporibus doloribus. Quasi aut nobis iusto necessitatibus facilis obcaecati.
</div>
```

```css
.view-height {
  height: 100vh;
}
```

O mesmo vale para a largura (vw).

```html
<div class="view-width">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae neque
  aliquam eveniet veritatis sunt vero optio, nemo placeat impedit laborum
  temporibus doloribus. Quasi aut nobis iusto necessitatibus facilis obcaecati.
</div>
```

```css
.view-width {
  width: 100vw;
}
```

**Nota:** assim como a porcentagem, as viewports são usados para estrutura e layout, não tamanho fontes.

Também temos as unidades vim e vmax, ambas usam como base o menor tamanho da tela. Por exemplo, no celular o menor tamanho é da largura, então dizer que uma altura é 40vmin, ele vai usar 40% da largura da tela.

**Nota:** vmin e vmax não são as unidades mais recomendadas para se usar.
