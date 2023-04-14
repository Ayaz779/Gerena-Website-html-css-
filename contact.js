console.log("gfdgdfg");
var Name = document.querySelector(`#name`);
var NameError = document.querySelector(`#NameHelp`);

var Contact = document.querySelector(`#number`);
var ContactError = document.querySelector(`#numberHelp`);

var email = document.querySelector(`#Email1`);
var EmailError = document.querySelector(`#emailHelp`);

var message = document.querySelector(`#Textarea1`);
var MessageError = document.querySelector(`#MessageHelp`);

var NameRegEx = new RegExp("[a-z,A-Z ]");
var ContactEXP1 = new RegExp("[0-9]");
var contain = [1,2,3,4,5,6,7,8,9,0]

var validName;
var validEmail;
var validContact;
var validTextarea;

Name.addEventListener(`keyup`,(stud)=>{

    if(!NameRegEx.test(stud.key) || stud.target.value=="" || stud.target.value.match(/[1,2,3,4,5,6,7,8,9,0]/g)){

        NameError.classList.remove(`d-none`);
        validName = false;
    }
    else
    {
        NameError.classList.add(`d-none`);
        validName = true;
    }
});

Contact.addEventListener(`focusout`,(stud)=>{
    var value0 = stud.target.value;

    if(value0=="" || value0.length < 11 || value0.length > 11){

        ContactError.classList.remove(`d-none`);
        validContact = false;
    }
    else
    {
        ContactError.classList.add(`d-none`);
        validContact = true;
    }
});


email.addEventListener(`focusout`,(stud)=>{
    var value0 = stud.target.value;
    var indexOfCom =  value0.slice(value0.indexOf('.com'));

    if(value0.length > 5 && value0.indexOf("@") > 0 && value0.indexOf(".com") >0 && indexOfCom.length == 4){

        EmailError.classList.add("d-none");
        validEmail = true;

    }else{
        EmailError.classList.remove("d-none");
        validEmail = false;
    }
    console.log();
});

message.addEventListener(`focusout`,(stud)=>{
    var value0 = stud.target.value;

    if(value0=="" || value0.length < 10 ){

        MessageError.classList.remove(`d-none`);
        validTextarea = false;
    }
    else
    {
        MessageError.classList.add(`d-none`);
        validTextarea = true;
    }
});


function myFunction() {
    if(validName==true&&validEmail==true&&validContact==true&&validTextarea==true){
        alert(`Your Form is submitted`);
    }else{
        alert(`Your Form is not submitted please fill all input fields.`);
    }
  }


