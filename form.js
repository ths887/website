let email = document.getElementById("email");
let pass = document.getElementById("pass");
let error = document.getElementById("error");
let error = document.getElementById("error2");

let regx = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/


function validation(){
    if(email.value.trim()==""){
        alert("email cannot be empty");
        return false;
    }
    if(pass.value.trim()==""){
        alert("password cannot be empty");
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
    if(regx.test(email.value)){
        error.innerHTML = valid;
        error.style.color = "green";
        return true;
    }
    else{
        error,innerHeight = "invalid";
        error.style.color = "red";
        return false;
    }
}
    
    
    

