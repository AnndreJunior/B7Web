const messageInput = document.querySelector("#message");
const sendMessageBtn = document.querySelector("button");
const messagesList = document.querySelector(".messages");
const chatForm = document.querySelector("#chat-form");

/** @type {string} */
let message;

messageInput.addEventListener("input", () => {
  message = messageInput.value.trim();
  sendMessageBtn.disabled = message.length === 0;
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const div = document.createElement("div");
  div.innerText = `[MENSAGEM] ${message}`;
  messagesList.appendChild(div);

  messageInput.value = "";
  messageInput.focus();
  sendMessageBtn.disabled = true;
});
