// Seleção dos elementos
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Array de tarefas
let tasks = [];

// Adiciona uma nova tarefa
function addTask(text) {
  tasks.push({ text, done: false });
  renderTasks();
}

// Remove uma tarefa
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Alterna o estado de concluída
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

// Renderiza a lista de tarefas
function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "Nenhuma tarefa adicionada";
    taskList.appendChild(emptyMessage);
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;
    if (task.done) {
      span.classList.add("done");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Deletar";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Renderiza a lista vazia ao carregar a página
renderTasks();

// Evento de envio do formulário
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();
  if (text) {
    addTask(text);
    taskInput.value = "";
    taskInput.focus();
  }
});
