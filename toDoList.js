window.onload = function () {
    loadTasks();
};

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    if (task) {
        let tasks = getTasksFromLocalStorage();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        displayTasks();
    }
}

function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    let tasks = getTasksFromLocalStorage();
    
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
function loadTasks() {
    displayTasks();
}
