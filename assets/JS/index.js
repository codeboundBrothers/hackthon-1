// getting elements 
let show = document.querySelector(".fetch-btn");
let completed = document.querySelector(".filter-completed");
let pending = document.querySelector(".filter-pending");
let asc = document.querySelector(".sort-ascending");
let dsc = document.querySelector(".sort-desc");
let root =  document.querySelector(".todo-container");

// UI function 
function createUi(data){
    root.innerHTML = "";
    data.forEach(todo => {
        let div = document.createElement("div");
        div.classList.add("card");
        let p = document.createElement("p");
        let span = document.createElement("span");
        span.innerText = todo.id;
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = todo.completed;
        p.innerText = todo.title;
        div.append(span,p,input);
        root.append(div);
    })
};

// fetch function
function load(){
    return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(val => val.json());
};

//completed task 
completed.addEventListener("click", () => {
    load().then(val => val.filter(todo => todo.completed)).then(val => createUi(val))
});

// pending task 
pending.addEventListener("click",() => {
    load().then(val => val.filter(todo => todo.completed == false)).then(val => createUi(val));
});

// ascending  task 
asc.addEventListener("click", () => {
    load().then(val => val.sort((a,b) => (a.title > b.title) ? 1 :((b.title > a.title) ? -1 : 0))).then(val => createUi(val));
})

// descending task 
dsc.addEventListener("click" , () => {
    load().then(val => val.sort((a,b) => (a.title > b.title) ? -1 :((b.title > a.title) ? 1 : 0))).then(val => createUi(val));
});

// for show data 
show.addEventListener("click", () => {
    load().then(val => createUi(val));
 });



