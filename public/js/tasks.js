const tasksContainer = document.querySelector('.tasksContainer');
const form = document.querySelector('.addTaskForm');

async function loadTasks() {
  try {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();

    const tasksContainer = document.querySelector('.tasksContainer');
    tasks.forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.className = 'taskCard';
      taskElement.innerHTML = `
		 <h3>${task.title}</h3>
		 <p>${task.description}</p>
		 <button class='editBtn' type='button' data-id=${task.id}>Edit Task</button>
		 <button class='cardBtn' type='button' data-id=${task.id}>Delete Task</button>
		 <div class="editForm" style="display:none;">
			<input type="text" name="title" placeholder="Title" value=${task.title} required />
			<input type="text" name="description" placeholder="Description" value=${task.description} required />
			<button class='submitEdit' data-id=${task.id}>Submit Changes</button>
		 </div>
	  `;
      tasksContainer.appendChild(taskElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadTasks);

tasksContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('cardBtn')) {
    const id = event.target.getAttribute('data-id');
    try {
      const response = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      const result = await response.json();

      if (result.success) {
        const deletedTaskCard = event.target.parentNode;
        deletedTaskCard.remove();
      } else {
        console.error('Failed to delete the task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return;
});

tasksContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('editBtn')) {
    const taskCard = event.target.closest('.taskCard');
    const editForm = taskCard.querySelector('.editForm');
    editForm.style.display = 'block';
  } else if (event.target.classList.contains('submitEdit')) {
    event.preventDefault();
    const taskId = event.target.getAttribute('data-id');
    const title =
      event.target.previousElementSibling.previousElementSibling.value;
    const description = event.target.previousElementSibling.value;

    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        const taskElement = event.target.closest('.taskCard');
        taskElement.innerHTML = `
			  <h3>${title}</h3>
			  <p>${description}</p>
			  <button class='editBtn' type='button' data-id=${taskId}>Edit Task</button>
			  <button class='cardBtn' type='button' data-id=${taskId}>Delete Task</button>
			  <div class="editForm" style="display:none;">
				 <input type="text" name="title" placeholder="Title" value="${title}" required />
				 <input type="text" name="description" placeholder="Description" value="${description}" required />
				 <button class='submitEdit' data-id=${taskId}>Submit Changes</button>
			  </div>
			`;
      } else {
        console.error('Failed to update the task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const inputs = Object.fromEntries(formData);

  try {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });

    const newTask = await response.json();

    if (newTask) {
      const tasksContainer = document.querySelector('.tasksContainer');
      const taskElement = document.createElement('div');
      taskElement.className = 'taskCard';
      taskElement.innerHTML = `
		 <h3>${newTask.title}</h3>
		 <p>${newTask.description}</p>
		 <button class='editBtn' type='button' data-id=${newTask.id}>Edit Task</button>
		 <button class='cardBtn' type='button' data-id=${newTask.id}>Delete Task</button>
		 <div class="editForm" style="display:none;">
			<input type="text" name="title" placeholder="Title" value=${newTask.title} required />
			<input type="text" name="description" placeholder="Description" value=${newTask.description} required />
			<button class='submitEdit' data-id=${newTask.id}>Submit Changes</button>
		 </div>
	  `;
      tasksContainer.appendChild(taskElement);
    }

    form.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
  } catch (error) {
    console.error('Error:', error);
  }
});
