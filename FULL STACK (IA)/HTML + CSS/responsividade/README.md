# Responsividade

Uma boa prática para criar sites no geral é pensar em mobile first. Essa prática reforça a ideia de que um site deve, primeiro, ser feito pensando em celulares e se adaptando para telas maiores. A maioria das pessoas acessam pelo celular, então primeiro se pensa nessa maioria.

No geral essa responsividade é definina no css. Os elementos existem no documento html, mas o css diz quando eles vão de fato aparecer e como ficarão na tela.

Podemos definir essa adaptação de várias formas. No geral podemos usar propriedades que são adaptáveis por natureza, como max-width para definir a largura máxima que um elemento pode ter, display flex para dispor os elementos e assim vai.

Temos um recurso no CSS chamado de media query, com ele podemos definir estilos mais específicos.

É uma boa prática fazer assim: definir um estilo mais adaptável possível e usar media query para detalhes específicos para determinados tamanho de tela. Sempre seguindo os requisitos do projeto.

Exemplo de uso do media query:

```css
nav {
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  max-width: 1000px;
  margin: auto;
}

nav .botoes {
  display: none;
}

nav .botoes button {
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}
nav .botoes button:hover {
  background-color: #4f4d4d;
}

nav .botoes .cadastro {
  display: none;
}

@media (width > 500px) {
  nav .botoes {
    display: block;
  }
}

@media (width > 700px) {
  nav .botoes .cadastro {
    display: inline;
  }
}
```

**Nota:** em versões mais "antigas" do CSS usávamos min-width ou max-width nos media queries.

```css
/* Equvalente ao width > 500 */
@media (min-width: 501px) {
  nav .botoes {
    display: block;
  }
}
```
