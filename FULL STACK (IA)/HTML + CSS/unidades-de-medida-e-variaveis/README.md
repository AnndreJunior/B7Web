# Unidades de medida e variáveis CSS

## Unidades de medida

Podemos definir o tamanho de algo usando diferentes unidades de medida, sejam elas fixas ou adaptáveis.
Por exemplo, podemos definir a largura como 300px, isso é um valor fixo independente do tamanho da tela.
Se então definirmos a largura como 70%, então o elemento irá ter uma largura de 70% do tamanho da tela.

Claro que é preciso escolher a unidade de medida com sabedoria, as vezes é melhor um tamanho fixo e outras
vezes um tamanho adaptável.

Dentre as unidades de medida temos as seguintes:

- Pixels
- Porcentagem (%)
- View height (vh - variação de altura disponível)
- View width (vw - variação da largura disponível)

## Variáveis

Não fogem muito do conceito de variáveis no geral, são caixinhas que armazenam valores. No caso do css pode armazenar
algum valor de largura, cores...

O nome das variáveis começam com dois traços (--). Por exemplo: --border-primary: #fff.

Definimos essas variáveis em :root.

```css
:root {
  --border-primary: #fff;
}

.button {
  border: 1px solid var(--border-primary);
}
```

Isso é extremamente útil para evitar repetição de valores, principalmente da paleta de cores do projeto.

Também podemos definir uma variável local de um seletor.

```css
:root {
  --border-primary: #fff;
}

.button {
  --border-secondary: #676363;

  border: 1px solid var(--border-secondary);
}
```
