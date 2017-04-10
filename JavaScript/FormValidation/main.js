/*function validation(){
    
    var a = document.getElementById("pwd");
    if(a.value.length > 1 && a.value.length < 5 ) {
        document.getElementById("pwd_error").innerHTML = "Week";
    }
    else if(a.value.length >= 5 && a.value.length <= 8){
        document.getElementById("pwd_error").innerHTML = "Good";
    }
    else if(a.value.length > 8) {
        document.getElementById("pwd_error").innerHTML = "Excellent";
    }
    else {
        document.getElementById("pwd_error").innerHTML = "";
    }
    
}*/


function validation(){
    
    var a = document.getElementById("pwd");
    var b = document.getElementById("strength");
    if(a.value.length > 1 && a.value.length < 5 ) {
        b.className = "red";
        b.innerHTML = "Week";
    }
    else if(a.value.length >= 5 && a.value.length <= 8){
        b.className = "yellow";
        b.innerHTML = "Good";
    }
    else if(a.value.length > 8) {
        b.className = "green";
        b.innerHTML = "Strong";
    }
    else {
        b.className = "";
        b.innerHTML = "";
    }
    
}


function confirm_pwd(){
    var a = document.getElementById("pwd");
    var b = document.getElementById("cpwd");
    
    if(a.value != b.value){
        document.getElementById("confirm_pwd").innerHTML = "Password not match";
    }
    else {
        document.getElementById("confirm_pwd").innerHTML = "Password match";
    }
    
}