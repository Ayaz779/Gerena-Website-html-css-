console.log("js working");
var card1 = document.querySelector(`.blog1`);

var htr = new XMLHttpRequest;

htr.open(`get`, `https://jsonplaceholder.typicode.com/posts`, true);

htr.onload = function (){
    let myArr = JSON.parse(this.response);
    for(var i=0; i<=25; i++){
       var my1 = `<div class="card blog1 text-black bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><span class="fw-bold">ID : </span>${myArr[i].id}</div>
        <div class="card-body">
          <h5 class="card-title"><span class="fw-bold">Title : </span>${myArr[i].title}</h5>
          <p class="card-text"><span class="fw-bold">Body : </span>${myArr[i].body}</p>
        </div>
        <a href="read.html?${[i]}"><button class="btn btn-primary w-50" style="margin-left:4rem">Read</button></a>
        </div>`;
       card1.innerHTML += my1;
  }
};

htr.send();
