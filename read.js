console.log("js working");
var card1 = document.querySelector(`.title`);
var url = window.location.href;
var id1 = (url.slice(url.indexOf("?")+1));

var htr = new XMLHttpRequest;

htr.open(`get`, `https://jsonplaceholder.typicode.com/posts/`, true);

htr.onload = function (){
    let myArr = JSON.parse(this.response);

    var my2 = `<div class="card-body">
      <h4 class="card-title m-5"><span class="fw-bold fs-1">Title : </span>${myArr[id1].title}</h4>
      <p class="card-text h4 m-5"><span class="fw-bold fs-1">Body : </span>${myArr[id1].body}</p>
    </div>`;
  card1.innerHTML += my2;
};

htr.send();
