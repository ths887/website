let first = document.getElementById("first");
let last = document.getElementById("last");
let pass = document.getElementById("pass");
let email = document.getElementById("email"); 

function validation(){
        if(first.value.trim()==""){
        alert("firstname cannot be empty");
        return false;
    }
    if(last.value.trim()==""){
        alert("lastname cannot be empty");
       return false;
    }
    if(pass.value.trim()==""){
        alert("password cannot be empty");
       return false;
    }
    if(email.value.trim()==""){
        alert("email cannot be empty");
       return false;
    }
   
    else if(pass.value.length<=8){
        alert("password is too short");
        pass.style.border ="2px solid red";
        return false;
    }
    else{
        return true;
         alert("validation is proper");
    }
    
}