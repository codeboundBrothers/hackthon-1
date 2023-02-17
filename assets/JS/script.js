let container = document.getElementById("article");
console.log(container);
let form = document.querySelector("form")
console.log(form);

let arr = [{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",description:"shfd",createdAt:"05/02/2023",id:1}];

// write button
let write = document.getElementById("name");
console.log(write);

write.addEventListener("click", () => {
    // let form =  document.createElement("form");
    let title = document.createElement("input");
    title.setAttribute("type" ,"text");
    title.setAttribute("placeholder" , "title");
    let description = document.createElement("input");
    description.setAttribute("type" ,"text");
    description.setAttribute("placeholder" , "description");
    let author = document.createElement("input");
    author.setAttribute("type" ,"text");
    author.setAttribute("placeholder" , "Author");
    let createdAt = document.createElement("input");
    createdAt.setAttribute("placeholder","date");
    createdAt.setAttribute("type","date");
    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    form.append(title,description,author,createdAt,submit);
});

// submit button Anish

form.addEventListener("submit" , () => {
    // container.innerHTML = null;
    console.log(arr);
    let obj = {};
    obj.title = title.value;
    obj.description = description.value;
    obj.author = author.value;
    obj.createdAt = createdAt.value;
    obj.title = title.value;
    arr.push(obj);              
    createUi(arr);
});

// search button Anish 
let search = document.getElementById("search");
console.log(search)

search.addEventListener("input" ,(event) => {
    let filterdata = data.filter(el => el.title.toLowerCase.includes(event.target.value.toLowerCase()));
    createUi(filterdata);
    container.innerHTML = null;
})


// create UI ANISH 
function createUi(data){
    data.forEach((el,i) => {
        let h2 = document.createElement("h2");
        h2.textContent = el.title;
        let h3 = document.createElement("h3");
        h3.textContent = el.author;
        let p = document.createElement("p");
        p.textContent = el.description;
        let span = document.createElement("span");
        span.textContent = el.createdAt;
        let button = document.createElement("button");
        button.textContent = "delete";
        el.id = i;
        container.append(h2,h3,p,span);
    })
};

createUi(arr);

// delete article Anish 



