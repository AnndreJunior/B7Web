# Box model e display

Todo elemento do site possuem:

- Conteúdo
- Borda
- Margem
- Preenchimento

**Nota:** Margem nada mais é que um espaçamento entre um elemento e outro. O preenchimento é interno.

## Box model (modelo caixa)

O box model define como os elementos serão dimensionados e distribuídos na tela. Em tradução livre, esse
modelo seria chamado de "modelo caixa", justamente por que todo elemento é uma espécie de container de um
determinado conteúdo.

Por padrão, ao definir a largura da nossa "caixa", o navegador irá aplicar apenas ao conteúdo, ou seja, qualquer valor adicionar (padding, border...) será somado a largura. Por exemplo, se eu definir que determinado conteúdo
possui largura de 30px e que ele tem uma borda de 5px, então na verdade terá 35px.

Isso é um problema pois tira a precisão no momento de definir esses estilos, mas é possível fazer um reset disso da
seguinte forma:

```css
/* No topo do arquivo CSS */
* {
  box-sizing: border-box;
}
```

Adicionando isso no arquivo CSS, no nosso exemplo de 30px de largura e borda de 5px, o elemento vai de fato ter 30px.
O navegador irá tirar 5px da largura para compensar por conta da borda, totalizando 30px de fato.

**Nota:** esse reset é considerado uma boa prática. Também é altamente recomendado remover a margem e preenchimento padrões. Os navegadores definem valores padrão.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## Display

Todo elemento possui um display que define como ele é dimensionado. Essa propriedade possui, essencialmente, quatro
valores:

- block (ocupa toda a largura disponível)
- inline (ocupa apenas o espaço necessário para conter o conteúdo)
- inline-block (junta as duas formas de renderização)
- none (oculta o elemento da tela)
