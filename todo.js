let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


window.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
});


btn.addEventListener("click", function () {
    let taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task.")
    }else{
        
    

    addTaskToDOM(taskText, false);
    saveTask(taskText, false);
    input.value = "";
    }
});


function addTaskToDOM(text, completed) {
    let items = document.createElement("li");


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    checkbox.checked = completed;

    let taskText = document.createElement("span");
    taskText.innerText = text;
    if (completed) taskText.classList.add("completed");

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    items.appendChild(checkbox);
    items.appendChild(taskText);
    items.appendChild(delbtn);
    ul.appendChild(items);
}


function saveTask(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateLocalStorage() {
    let updatedTasks = [];
    ul.querySelectorAll("li").forEach(li => {
        let text = li.querySelector("span").innerText;
        let completed = li.querySelector("input").checked;
        updatedTasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}


ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        let listItem = e.target.parentElement;
        listItem.remove();
        updateLocalStorage();
        console.log("Task Deleted..!");
    }


    if (e.target.classList.contains("check")) {
        let taskText = e.target.nextElementSibling;
        taskText.classList.toggle("completed", e.target.checked);
        updateLocalStorage();
        console.log("Task completed:", e.target.checked);
    }
});

