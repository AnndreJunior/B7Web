# Números, math e conversão de tipos

## Números

No javascript os números podem ser inteiros ou de ponto flutuante, mas se tratando de tipo estático, são apenas number.

Quando tentamos fazer a operação de soma entre uma variável que possui, por exemplo, o valor 5 e outra com o valor "3", o javascript não vai lançar um erro, mas converter a variável com valor 5 para string e concatenar elas. Na verdade isso acontece com qualquer tipo.

```javascript
let a = 5;
let b = "3";
let c = true;

console.log(a + b); // Saída: 53
console.log(b + c); // Saída: 3true
```

## Conversão de tipo

Quando pegamos um valor de uma tag HTML pelo javascript, seu valor sempre virá do tipo string. Isso significa que precisaremos converter esse valor.

No caso dos númericos, usamos a função parseInt ou parseFloat.

**Nota:** a função Number é a versão genérica, então ela consegue converter strings para números inteiros ou flutuantes.

## Math

Em javascript temos o objeto Math que permite que façamos operações matemáticas no código.

Por exemplo, podemos arredondar números usando o método Math.round:

```javascript
let numero = 3.7;
let numeroArredondado = Math.round(numero);

console.log(numeroArredondado);
```

Esse método segue o princípio matemático de arredondamento: até 0,5 arredonda para cima, caso contrário arredonda para baixo. O método Math.floor sempre arredonda para baixo:

```javascript
let numero = 3.7;
let numeroArredondado = Math.floor(numero);

console.log(numeroArredondado);
```

O método Math.ceil arredonda sempre para cima:

```javascript
let numero = 3.7;
let numeroArredondado = Math.ceil(numero);

console.log(numeroArredondado);
```

Para gerar números aleatórios usamos Math.random.

```javascript
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

/**
 * Gera números aleatórios entre 0 e o limite (incluindo o limite)
 *
 * @param {number} limite - Limite do intervalo para gerar números aleatórios.
 * @returns Número aleatório;
 */
function gerarNumeroAleatorioComIntervalo(limite) {
  return Math.floor(Math.random() * (limite + 1));
}
```
