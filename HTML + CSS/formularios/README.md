# Formulários

Todo formulário fica contido na tag `<form></form>`.
Os elementos como caixas de texto para email, senha, botão de envio, cancelar e etc ficam
dentro dessas tags.

## Input

Toda tag `<input />` é uma tag de entrada de dados. Nela podemos digitar textos, emails, senhas...

```html
<!-- Input de email -->
<input type="email" />

<!-- Input de senha -->
<input type="password" />

<!-- Input de texto -->
<input type="text" />
```

## Label

A tag label representa uma legenda pra um item da interface. Normalmente é utilizado para inputs.
A label pode tanto conter o item como referenciar usando o atributo for que deve receber o id do item.

```html
<label>
  Legenda
  <input type="text" name="item" />
</label>

<label for="item">Legenda</label>
<input type="text" name="item" id="item" />
```

Curiosamente, ao clicar na legenda, ele foca no elemento.

## Botões

Podemos definir um botão para enviar o formulário de duas formas: com a tag input ou com a tag button.

```html
<button type="submit">Enviar</button>

<input type="submit" value="Enviar" />
```

## Validação

A princípio usamos javascript para fazer a validação do formulário, mas possuímos alguns atributos para validar via html:

- required (obrigatório)
- maxlength (tamanho máximo)
- minlegth (tamanho mínimo)

```html
<input type="text" name="fullname" required maxlength="120" />

<textarea required minlength="10" maxlength="200"></textarea>
```
