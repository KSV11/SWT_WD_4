document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskDateTime = document.getElementById('taskDateTime');
  const taskList = document.getElementById('taskList');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const dateTime = taskDateTime.value;

    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText + (dateTime ? ` (Due: ${new Date(dateTime).toLocaleString()})` : '');

    const buttons = document.createElement('div');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.onclick = () => {
      taskItem.classList.toggle('completed');
    };

    const editBtn = document.createElement('button');
    editBtn.textContent = '✎';
    editBtn.onclick = () => {
      const newText = prompt('Edit task:', taskText);
      if (newText) {
        taskContent.textContent = newText + (dateTime ? ` (Due: ${new Date(dateTime).toLocaleString()})` : '');
      }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => {
      taskList.removeChild(taskItem);
    };

    buttons.appendChild(completeBtn);
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    taskItem.appendChild(taskContent);
    taskItem.appendChild(buttons);
    taskList.appendChild(taskItem);

    // Clear inputs
    taskInput.value = '';
    taskDateTime.value = '';
  });
});
