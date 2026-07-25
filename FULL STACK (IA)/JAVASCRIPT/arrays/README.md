# Arrays

Arrays em javascript são um conjunto de dados salvos em uma única variável na memória. Um array - em javascript, pode conter números, strings, valores booleanos, funções, objetos, outros arrays (transformando ela em uma matriz)...

Todo array possui a propriedade length que armazena o tamanho do array.

## Iteração em arrays

### 1. Loops tradicionais

O jeito mais tradicional é usar um loop para percorrer. Todo array possui índice inicial zero, então criamos um loop com o valor inicial do contador sendo zero e vamos incrementando até o tamanho do array - 1.

```javascript
let lista = ["a", "b", "c", "d"];

// Iteração com while
let i = 0;
while (i < lista.length) {
  console.log(lista[i]);
  i++;
}

// Iteração com for
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
```

### 2. Método forEach

Os arrays em javascript possuem alguns métodos para iteração, um deles é o forEach.

```javascript
let lista = ["a", "b", "c", "d"];

lista.forEach((item) => console.log(item));
```

## Adição de elementos

Podemos adicionar um elemento no final do array usando o método push.

```javascript
let lista = ["a", "b", "c", "d"];

lista.push("e");
```

## Remoção de elementos

Usamos o método pop para poder remover o último item do array.

```javascript
let lista = ["a", "b", "c", "d"];

lista.pop();
```

O método shift remove o primeiro item do array.

```javascript
let lista = ["a", "b", "c", "d"];

lista.shift();
```

## Busca

Podemos verificar se um item existe usando o método includes. Ele retorna apenas um booleano dizendo de determinado campo existe ou não no nosso array.

```javascript
let lista = ["a", "b", "c", "d"];

console.log(lista.includes("a")); // true
console.log(lista.includes("z")); // false
```

Para de fato buscar um item, usamos dois métodos: find ou findIndex.

O método find busca o valor ou retorna undefined se não achar.

O método findIndex retorna o índice daquele valor ou -1 se não achar.

```javascript
let lista = ["a", "b", "c", "d"];

console.log(lista.find((item) => item === "a")); // Saída: a
console.log(lista.find((item) => item === "z")); // Saída: undefined
console.log(lista.findIndex((item) => item === "a")); // Saída: 0
console.log(lista.findIndex((item) => item === "z")); // Saída: -1
```

## Map e filter

Esses métodos não modificam o array, eles retornam um novo array com base no que a função de callback executa.

Usamos a função map quando queremos fazer algo na intenção de mudar os dados do array, mas no lugar de mudarmos o estado do array retornamos um novo com essas modificações.

```javascript
let lista = ["a", "b", "c"];
let listaUpperCase = lista.map((item) => {
  return item.toUpperCase();
});

console.log(listaUpperCase); // Saída: ['A', 'B', 'C']
```

A função filter, como o próprio nome sugere, irá filtrar os itens do array. Seu resultado é um novo array com esse filtro aplicado.

A função de callback tem como retorno um valor booleano que diz se uma condição foi atendida para determinado elemento.

```javascript
let nomes = ["João", "Maria", "Thayenne", "Jó", "André"];
let nomesFiltrados = nomes.filter((item) => {
  return item.length >= 3;
});

console.log(nomesfiltrados); // Saída: ["João", "Maria", "Thayenne", "André"]
```
