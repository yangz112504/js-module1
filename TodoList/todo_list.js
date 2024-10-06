const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasklist = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAll");

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks(){
    tasklist.innerHTML = "";
    tasks.forEach((task,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id = "task-${index}" ${task.completed ? "checked" : ""}>
        <label for = "task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", ()=> toggleTask(index));
        tasklist.appendChild(li);
    });
    
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
//add button that clears all tasks
clearAllTasksBtn.addEventListener("click", clearAllTasks);
