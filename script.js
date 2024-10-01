function myfunction(){
var a=4;
document.getElementById("demo").innerHTML= a*a;
}
function validate(e){
    e.preventDefault();
    const email =document.getElementById("email").value;
    const password =document.getElementById("password").value;
    const age =document.getElementById("age").value;
    const msgBox = document.getElementById('message');
    let message = " ";
    if(email ===" "){
        message ="please enter your name";
        msgBox.style.color ="red";
    }
     else if (password ===" "){
        message ="please enter at least 8 character";
        msgBox.style.color ="red";
     }

     else if (age ===" "){
        message ="Age must be between 15 to 50 years";
        msgBox.style.color ="red";
     }
     else{
        message ="login successful"
        msgBox.style.color ="green"
     }
     msgBox.innerTEXT = message;

}