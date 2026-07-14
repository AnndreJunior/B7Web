# Tipos de valores para cores

Podemos definir uma cor pelo nome. Esses nomes são valores já definidos pelos navegadores.

```css
body {
  backgroundcolor: blue;
}

h1 {
  color: greenyellow;
}
```

Obviamente existem infinitas tonalidades, por exemplo, da cor roxa. Nesses casos não usaremos o nome, mas alguma identificação mais específica. Dentre essas formas mais específicas, podemos usar código decimal ou RGB (o hexadecimal é geralmente o mais utilizado).

Esse valor em hexadecimal começa com um # seguido de seis valores. Os dois primeiros são relacionados aos tons de vermelho, os dois do meio são as tonalidades de verde e os dois últimos são do azul.

Como estamos falando de hexadecimal (0 1 2 3 4 5 6 7 8 9 A B C D E F), 0 seria nenhuma tonalidade e F toda uma tonalidade.

Como o branco nada mais é que a junção de todas as cores, então teríamos que definir a tonalidade máxima de vermelho, verde e azul #FFFFFF.

```css
body {
  background: #33eec9;
}
```

O código rgb é definido assim: rgb(tom de vermelho, tom de verde, tom de azul). Aqui cada tom possui valores de 0 até 255.

Podemos também usar a variável currentColor. Ela vai pegar o valor de cor definida no elemento pai e reutilizar.
