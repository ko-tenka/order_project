const tasksContainer = document.querySelector('.tasksContainer');
const form = document.querySelector('.addTaskForm');

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
     <img src="${newTask.img}" alt="Тут обложка" />
		 <h3>${newTask.title}</h3>
		 <p>${newTask.description}</p>
     <h3>${newTask.author}</h3>
		 <div class="editForm" style="display:none;">
		 </div>
	   `;
    tasksContainer.appendChild(taskElement);
    }

    form.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
    // window.location.href = '/';
  } catch (error) {
    console.error('Error:', error);
  }
});
