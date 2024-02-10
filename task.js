let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const taskNumber = document.createElement('span');
        taskNumber.textContent = (index + 1) + '. ';
        taskNumber.style.fontWeight = 'bold';
        li.appendChild(taskNumber);

        const span = document.createElement('span');
        span.textContent = task.text;
        span.style.textDecoration = task.completed ? 'line-through' : 'none';
        li.appendChild(span);

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => updateTask(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        li.appendChild(updateButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}


function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function updateTask(index) {
    const updatedText = prompt('Enter updated task text:', tasks[index].text);
    if (updatedText !== null) {
        tasks[index].text = updatedText.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTasks();
    }
}
