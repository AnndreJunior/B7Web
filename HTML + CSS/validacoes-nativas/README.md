# Validações nativas

As tags html relacionadas a entrada de dados possuem algumas propriedades de validação. Normalmente é feito usando javascript, mas também podemos usar em conjunto com algumas do próprio html.

**Nota:** não precisamos usar todos ao mesmo tempo. Por exemplo, podemos definir um campo opicional (sem required) com quantidade mínima de 4 caracteres.

A seguir veremos alguns desses atributos:

## required

Podemos usar para dizer que determinado campo é obrigatório. Dependendo do tipo, podemos ter alguns comportamentos interessantes.

Por exemplo, inputs de email irão validar se o email é válido.

```html
<input type="text" required />
```

## minlength e maxlength

Define a quantidade mínima de caracteres que um campo deve ter.

```html
<input type="text" minlength="2" />
```

Em contrapartida, o maxlength diz qual a quantidade máxima de caracteres.

Ele é interessante porque nem permite mais que o usuário digite quando bater a quantidade máxima.

## min e max

Esses dizem qual o valor numérico mínimo ou máximo. Esses devem ser usados em tags de data e numéricas.

```html
<input type="number" min="5" />
```

## step

Para campos numéricos, podemos dizer de quanto em quanto podemos adicionar no meu input. Por exemplo, podemos querer valores de dois em dois (múltipos de 2, podemos pensar assim).

Então nas setinhas que aparecem no input irá subir de 2 em 2. Caso eu digite, o navegador vai validar, então não poderei colocar 5 por exemplo.

```html
<input type="number" step="2" />
```
