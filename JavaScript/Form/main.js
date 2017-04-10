window.addEventListener("load", init);

function init(){
document.getElementById("submit").addEventListener("click",submit);
document.getElementById("password").addEventListener("blur", validate_password);
document.getElementById("uname").addEventListener("blur",validate_uname);
}


function submit(){
    var c = document.getElementById("uname").value;
    document.getElementById("Result").innerHTML = " Welcome " + c;
}



function validate_uname() {
 alert(" User name validation");
    var str = document.getElementById("uname").value;
    if(!str){
        document.getElementById("validation1").innerHTML = "U can not leave this field blank";
    }
    else if(str>=5){
        return true;
    }
    else 
        document.getElementById("validation1").innerHTML = "Length should be greater than five"
        
        }
 

function validate_password(){
	/*alert(" password validation");*/
	var str = document.getElementById("password").value;
	if(!str){
		document.getElementById("validation2").innerHTML = "You can not leave this field blank";
	}
	else if(isNaN(str)){
		document.getElementById("validation2").innerHTML = "Password Can only have numrical digits!!!";
	}
	else if( ! (/(\d+){5}/).test(str) ) {
		document.getElementById("validation2").innerHTML = "Invalid password, Minimum 5 digits required!!!";
	}
	else{
		document.getElementById("validation2").innerHTML = str;
	}
}
