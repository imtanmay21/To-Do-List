// UI vars
const form = document.querySelector('form');
const taskList = document.querySelector('#task-list ul')
const clrBtn = document.querySelector('#task-list a');
const filterText = document.querySelector('#task-list input[type=text]');
const taskName = document.querySelector('#task-card form input[type=text]');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // Add Task event
    form.addEventListener('submit', addTask);

    // Clear Task
    taskList.addEventListener('click', delTask);

    // Clear all Tasks
    clrBtn.addEventListener('click', delTaskAll);

    // Filter Tasks
    filterText.addEventListener('keyup', filterTask);
}

// Add Task
function addTask(e){

    // Create li element
    const li = document.createElement('li');

    // Add html to it
    li.innerHTML = `<p>${taskName.value}</p><a class="del-item" href="#"><i class="fas fa-times"></i></a>`;

    
    // Append to list
    taskList.appendChild(li);

    // Add class
    li.classList.add('faded-out');

    // Adding Animation
    requestAnimationFrame(() => {
        li.classList.remove('faded-out');
    })

    // Blank value again
    taskName.value = '';
    
    // Prevent Default behaviour
    e.preventDefault();
}

// Delete task
function delTask(e){

    // Event Delegation
    if(e.target.parentElement.nodeName === 'A') {
        // Remove element
        if(confirm('Are you sure ?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Delete all tasks
function delTaskAll(e){
    if(confirm('Are you sure ?')) {
        while(taskList.firstChild) {
            taskList.firstChild.remove();
        }
    }
}

// Filter Tasks
function filterTask(e){
    text = e.target.value;
    document.querySelectorAll('#task-list ul li').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text.toLowerCase()) != -1){
            task.style.display = 'flex';
        }
        else {
            task.style.display = 'none';
        }
    });
}
