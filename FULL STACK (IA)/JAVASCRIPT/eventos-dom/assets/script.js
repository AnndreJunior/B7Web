/**
 * @param {PointerEvent} event
 */
function clicou(event) {
  let elemento = {
    h1: "título",
    button: "botão",
  };

  alert("Dança gatinho!");
  console.log(
    `Você apertou em um ${elemento[event.target.localName] || "elemento"}`,
  );
}

/**
 * @param {string} mensagem
 */
function enviarMensagem(mensagem) {
  console.log(mensagem);
}

/**
 * @param {string} valor
 */
function sanitizarMensagem(valor) {
  let mensagemSanitizada = valor.trim();
  if (mensagemSanitizada.length == 0) {
    throw new Error("Campo de mensagem não preenchido");
  }
  return mensagemSanitizada;
}

let titulo = document.querySelector("h1");
titulo.addEventListener("click", clicou);

let input = document.getElementById("nome");
input.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() == "enter") {
    try {
      let mensagem = sanitizarMensagem(input.value);
      enviarMensagem(mensagem);
    } catch (error) {
      event.preventDefault();
      alert(error.message);
    }
    input.value = "";
  }
});

let botao = document.querySelector("button");
botao.addEventListener("click", () => {
  try {
    let mensagem = sanitizarMensagem(input.value);
    enviarMensagem(mensagem);
  } catch (error) {
    alert(error.message);
  }
  input.value = "";
}); // Podemos passar uma arrow function diretamente como callback
