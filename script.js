const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDateTime = document.getElementById("task-datetime");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value, taskDateTime.value);
  taskInput.value = "";
  taskDateTime.value = "";
});

function addTask(taskText, dateTime) {
  const li = document.createElement("li");

  const taskInfo = document.createElement("span");
  taskInfo.textContent = `${taskText} (${dateTime || 'No due date'})`;

  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskText);
    const newDate = prompt("Edit date/time:", dateTime);
    if (newText !== null) taskInfo.textContent = `${newText} (${newDate || 'No due date'})`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(actions);
  taskList.appendChild(li);
}
