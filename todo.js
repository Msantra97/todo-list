let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let items = document.createElement("li");


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    

    let taskText = document.createElement("span");
    taskText.innerText = input.value;


    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    items.appendChild(checkbox);
    items.appendChild(taskText);
    items.appendChild(delbtn);
    ul.appendChild(items);

    input.value = "";
});


ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log("Task Deleted..!");
    }


    if (e.target.classList.contains("check")) {
        let taskText = e.target.nextElementSibling; 
        taskText.style.textDecoration = e.target.checked ? "line-through" : "none";
        console.log("Task completed:", e.target.checked);
    }
});
