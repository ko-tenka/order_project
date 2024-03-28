async function loadTasks() {
  try {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();

    const tasksContainer = document.querySelector('.tasksContainer');
    tasks.forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.className = 'bookCard';
      taskElement.innerHTML = `
      
        <img src=${task.img}' class="imgCard" alt="Placeholder Image">
      
        <h3>${task.title}</h3>
        
      `;
      tasksContainer.appendChild(taskElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

loadTasks();
