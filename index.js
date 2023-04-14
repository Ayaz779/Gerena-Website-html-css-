console.log("js working");
var card = document.querySelector(`.blog`);
var card1 = document.querySelector(`.carousel1`);
var card2 = document.querySelector(`.carousel2`);
var card3 = document.querySelector(`.carousel3`);
console.log(card2)
var htr = new XMLHttpRequest;

htr.open(`get`, `https://jsonplaceholder.typicode.com/posts`, true);

htr.onload = function (){
    let myArr = JSON.parse(this.response);
    for(var i=0; i<=11; i++){
       var my1 = `<div class="card blog1 text-black bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><span class="fw-bold">ID : </span>${myArr[i].id}</div>
        <div class="card-body">
          <h5 class="card-title"><span class="fw-bold">Title : </span>${myArr[i].title}</h5>
          <p class="card-text"><span class="fw-bold">Body : </span>${myArr[i].body}</p>
        </div>
        <a href="read.html?${[i]}"><button class="btn btn-primary w-50" style="margin-left:4rem">Read</button></a>
        </div>`;
       card.innerHTML += my1;
  }
  for(var j=12; j<=14; j++){
    var my2 = `<div class="card blog1 text-black bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><span class="fw-bold">ID : </span>${myArr[j].id}</div>
        <div class="card-body">
          <h5 class="card-title"><span class="fw-bold">Title : </span>${myArr[j].title}</h5>
          <p class="card-text"><span class="fw-bold">Body : </span>${myArr[j].body}</p>
        </div>
        <a href="read.html?${[j]}"><button class="btn btn-primary w-50" style="margin-left:4rem">Read</button></a>
        </div>`;
       card1.innerHTML += my2;
  }
  for(var k=15; k<=17; k++){
    var my3 = `<div class="card blog1 text-black bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><span class="fw-bold">ID : </span>${myArr[k].id}</div>
        <div class="card-body">
          <h5 class="card-title"><span class="fw-bold">Title : </span>${myArr[k].title}</h5>
          <p class="card-text"><span class="fw-bold">Body : </span>${myArr[k].body}</p>
        </div>
        <a href="read.html?${[k]}"><button class="btn btn-primary w-50" style="margin-left:4rem">Read</button></a>
        </div>`;
       card2.innerHTML += my3;
  }
  for(var l=18; l<=20; l++){
    var my4 = `<div class="card blog1 text-black bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><span class="fw-bold">ID : </span>${myArr[l].id}</div>
        <div class="card-body">
          <h5 class="card-title"><span class="fw-bold">Title : </span>${myArr[l].title}</h5>
          <p class="card-text"><span class="fw-bold">Body : </span>${myArr[l].body}</p>
        </div>
        <a href="read.html?${[l]}"><button class="btn btn-primary w-50" style="margin-left:4rem">Read</button></a>
        </div>`;
       card3.innerHTML += my4;
  }
};

htr.send();






