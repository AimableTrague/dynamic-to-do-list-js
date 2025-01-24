document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      // Check if task input is empty
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create <li> element
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      classList.add('remove-btn'); // Use classList.add
  
      // Add event listener to remove button
      removeButton.onclick = () => {
        li.remove();
      };
  
      // Append remove button to <li>
      li.appendChild(removeButton);
  
      // Append <li> to task list
      taskList.appendChild(li);
  
      // Clear input field
      taskInput.value = '';
    }
  
    // Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);
  
    // Add event listener to input field for 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  