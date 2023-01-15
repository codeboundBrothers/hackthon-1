// let write = document.querySelector("");
let container = document.querySelector("");

// write button
let write = document.querySelector("write");

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
let data = [];
 
form.addEventListener("submit" , () => {
    form.style.display
    container.innerHTML = null;
    let obj = {};
    obj.title = title.target.value;
    obj.description = description.target.value;
    obj.author = author.target.value;
    obj.createdAt = createdAt.target.value;
    obj.title = title.target.value;
    data.push(obj);
    createUi(data);
});

// search button Anish 
let search = document.querySelector("search");

search.addEventListener("keyup" ,() => {
    let filterdata = data.filter(el => el.title.toLowerCase.includes(search.value));
    createUi(filterdata);

})

// data 
// let data = [{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:1},{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:2},{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:3},{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:4},{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:5},{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:6},{title:"anish",author:"AK",description:"shfd",createdAt:"05/02/2023",id:7}];



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
        el.id = i;
        div.append(h2,h3,p,span);
    })
};

createUi(data);

// delete article Anish 

// delete.addEventListener("click" ,() =>{
//     container.innerHTML = null;
//     arr.splice(id,1);
//     createUi(data)
// });

