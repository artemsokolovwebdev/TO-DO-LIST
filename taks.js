// mas 
const taskList = loadTasks()
// dom
const btnRemove = document.getElementById("btn-remove")
const todo = document.getElementById("todo")
const btn = document.getElementById("btn")
const taskInput = document.getElementById("taskInput")
// func
function render (){
    let taskHTML = taskList.map((task, index) => `
    <li>
        <span>${task}</span>
        <button id="btn-remove">-</button>
    
    </li>`).join("")
    
    todo.innerHTML = taskHTML; 
}
render()
function addTask(){
    const taskAdd = taskInput.value.trim()
    if(taskAdd){
        taskList.push(taskAdd)
        taskInput.value = ""
        render()
        saveTasks()

    }
}
todo.addEventListener("click", (event) => {
    if(event.target.id === "btn-remove"){
        const index = Array.from(todo.children).indexOf(event.target.parentElement)
        taskList.splice(index, 1)
        render()
        saveTasks()
    }
})
btn.addEventListener("click", addTask)
function removeTask(){
    taskList.pop()
    render()
    saveTasks()
}
btnRemove.addEventListener("click", removeTask)
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(taskList))
}
function loadTasks(){
    const savedTasks = localStorage.getItem("tasks") || "[]"; 
    return JSON.parse(savedTasks)
}