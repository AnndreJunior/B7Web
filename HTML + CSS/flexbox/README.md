# Flexbox

O flexbox é uma forma de display que permite organizar os elementos na tela definindo regras de organização. Ele calcula automaticamente os valores a serem usados para dispor os elemntos. Ele trabalha em dois eixos: o eixo principal (que é definido a partir da propriedade flex-direction) e o eixo transversal (que é perpendicular ao eixo principal).

A nível prático, o valor padrão para o flex-direction é row (linha), nesse caso o eixo transversão seria o eixo de uma coluna - que é perpendicular. Ou seja, se definirmos o flex-direction como column, então o eixo principal é uma coluna.

Detalhe que o elemento pai recebe a propriedade display com valor flex.

Visualmente falando, se pegarmos um elemento do tipo bloco e definirmos seu display como flex, ele vai agrupar em linha, mas com uma organização flexível.

**Nota:** a príncipio vamos considerar que flex-direction é row. Quando for necessário considerar seu valor como column, será dito.

Por exemplo: existe uma propriedade chamada justify-content que organiza os elementos no eixo principal. Se definirmos seu valor como flex-end, então ele vai colocar os elementos no fim do eixo, nesse caso no fim da linha. Se o flex-direction fosse column, então seria no fim da coluna.

O align-items dispões os elementos no eixo transversal, ou seja na coluna.

Ambos possuem os mesmos valores principais, sendo eles:

- flex-start (todos no início)
- flex-end (todos no fim)
- center (todos no centro)

Os seguintes valores são apenas da propriedade justify-content:

- space-around (espaçados de forma igual ao redor)
- space-between (espaçados entre eles de forma igual)

**Nota:** perceba que nenhum valor - seja fixo ou dinâmico foi definido, isso por que o flexbox calcula com base no espaço disponível no elemento.

Esse display permite uma organização mais flexível e responsiva, facilitando a disposição proporcional entre elementos, centralização, alinhamentos...

**Nota:** o flexbox é unidimensional, ou seja, ele lida com os elementos em apenas uma dimensão (linha ou coluna).
