const taskInput = document.querySelector('.taskInput');
const taskDueDate = document.querySelector('.taskDueDate');
const taskList = document.querySelector('.taskList');

let tasks = [];

function addTask() {
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskInput.value} <span class="due-date">${taskDueDate.value}</span>`;
    taskList.appendChild(taskItem);
    
    const deleteTask = document.createElement('span');
    deleteTask.innerHTML = "\u00d7";
    deleteTask.classList.add('delete-btn');
    taskItem.appendChild(deleteTask);

    taskInput.value = '';
    taskDueDate.value = '';

    saveTasks();
}

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
        saveTasks();
    } else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveTasks();
    }
});

function saveTasks() {
    tasks = [];
    taskList.querySelectorAll('li').forEach(task => {
        tasks.push({
            text: task.childNodes[0].textContent,
            date: task.querySelector('.due-date').textContent,
            completed: task.classList.contains('checked')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${task.text} <span class="due-date">${task.date}</span>`;
        if (task.completed) {
            taskItem.classList.add('checked');
        }
        const deleteTask = document.createElement('span');
        deleteTask.innerHTML = "\u00d7";
        deleteTask.classList.add('delete-btn');
        taskItem.appendChild(deleteTask);
        taskList.appendChild(taskItem);
    });
}

function filterTasks(filterType) {
    const allTasks = taskList.querySelectorAll('li');
    allTasks.forEach(task => {
        switch (filterType) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('checked') ? 'flex' : 'none';
                break;
            case 'active':
                task.style.display = task.classList.contains('checked') ? 'none' : 'flex';
                break;
            default:
                task.style.display = 'flex';
        }
    });
}

loadTasks();