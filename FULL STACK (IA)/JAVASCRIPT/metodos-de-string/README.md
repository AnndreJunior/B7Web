# Métodos de string

Por meio de vários métodos podemos manipular os valores do tipo string no javascript. Por exemplo, ao receber dados do formulário, podemos remover espaços desnecessários que ficam no começo e no fim na string (dependendo do cenário podemos até mesmo remover espaços vazios no meio do texto).

## Métodos de string

**Nota:** métodos que "mudam o valor da variável" na verdade apenas retornam a versão modificada, elas não modificam o estado da variável.

### 1. Obter tamanho

Podemos obter o tamanho de uma string usando o método string.length.

```javascript
let nome = "Fulano";
console.log(nome.length); // Exibe a quantidade de caracteres da variável nome, incluindo os espaços
```

### 2. Texto em caixa baixa

Podemos pegar um texto e deixar ele todo em caixa baixa com apenas um método:

```javascript
let nome1 = "André";
let nome2 = "ANDRÉ";

// Ambos a saída será "andré"
console.log(nome1.toLowerCase());
console.log(nome2.toLowerCase());
```

### 3. Texto em caixa alta

Para deixar o texto em caixa alta o processo é pareciso:

```javascript
let nome1 = "André";
let nome2 = "andré";

// Ambos a saída será "ANDRÉ"
console.log(nome1.toUpperCase());
console.log(nome2.toUpperCase());
```

### 4. Remover espaços

Podemos remover espaços das bordas para formatar um campo que o usuário preencheu, por exemplo. Um cenário típico é o usuário preencher o email assim: "user@email.com ". Nesse caso usamos um método chamado trim.

```javascript
let email = " user@email.com  ";

// A saída será "user@email.com"
console.log(email.trim());
```

**Nota:** isso não remove espaços extras entre palavras, apenas no início e fim da string.

## Execução encadeada

Podemos chamar esses e mais métodos de forma encadeada, conforme o exemplo.

```javascript
let email = "   USER@EMAIL.COM         ";
let normalizedEmail = email.trim().toLowerCase(); // Podemos chamar mais métodos conforme necessário

// Saída: "user@email.com"
console.log(normalizedEmail);
```
