# Eventos DOM

Eventos são ações que nossa página pode ou não responder. Por exemplo, quando o usuário clica no botão de enviar de um formulário, um evento de click é disparado. Esse evento é capturado pelo javascript e então ele responde a esse evento.

Nesse caso o script coleta os dados do input e envia para uma API Rest, por exemplo, para então notificar ao usuário que o formulário foi enviado.

## Definições de eventos

### 1. No HTML

Podemos dizer no próprio HTML o evento que queremos capturar e para qual função passar esse evento. Para isso usamos o atributo `on<event>="funcao()"`.

```html
<button onclick="enviarFormulario()">Enviar</button>
```

```javascript
function enviarFormulário() {
  // Processo de envio do formulário ao clicar no botão.
}
```

**Nota:** se tratando de organização não é a melhor forma.

Podemos passar o objeto do evento pelo parâmetro da função.

```html
<button onclick="enviarFormulario(event)">Enviar</button>
```

```javascript
function enviarFormulário(event) {
  // Processo de envio do formulário ao clicar no botão.
}
```

### 2. Tudo via javascript

Podemos fazer tudo via javascript usando a função `document.addEventListener(evento, callback)`. Dessa forma também podemos passar o evento como parâmetro.

```html
<button>Clique em mim</button>
```

```javascript
let clickMeButton = document.querySelector("button");
clickMeButton.addEventListener(
  "click",
  (
    event /* Podemos acessar o evento para também modificar o comportamentos padrão, por exemplo */,
  ) => {
    alert("Clicou!!!!");
  },
);
```

**Nota:** esse é o jeito mais recomendado de adicionar eventos.

## Eventos de teclado

Podemos também disparar eventos quando pressionamos uma tecla. Na verdade o javascript é bem mais específico, podemos disparar um evento quando a tecla é pressionada ou solta. O nome dos eventos são, respectivamente, keydown e keyup.
