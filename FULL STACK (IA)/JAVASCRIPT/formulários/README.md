# Formulários

A partir de formulários podemos enviar dados, por exemplo, para nosso backend. Todo formulário dispara o evento "submit" quando enviado.

Podemos deixar ele com seu comportamento padrão. Isso é feito quando nosso backend também envia o HTML da nossa página, mas podemos capturar esse evento e customizar com ele irá funcionar.

```javascript
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que o formulário tenha seu comportamento padrão

  // Toda a lógica para envio do formulário
});
```

A partir daqui podemos usar a manipulação DOM de elementos de input para acessar os dados e enviar para onde queremos.

> Botões do tipo submit, quando dentro do formulário, também disparam esse evento.
