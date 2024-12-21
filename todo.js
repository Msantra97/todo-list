let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector('input');

btn.addEventListener("click",function(){
    let items = document.createElement("li");
    items.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    items.appendChild(delbtn);
    ul.appendChild(items);
    input.value ="";
});


ul.addEventListener("click",function(e){
   if(e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
    console.log("Task Delete..!");
   }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delbtn of delBtns) {
//     delbtn.addEventListener("click",function(){
//         let par = delbtn.parentElement;
//         console.log(par)
//         par.remove();
//     })
// };