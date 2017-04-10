window.addEventListener("load", init);

function init(){
document.getElementById("submit").addEventListener("click",submit);
document.getElementById("userid").addEventListener("blur",validate_userid);
/*document.getElementById("password").addEventListener("blur", formValidation);*/
document.getElementById("uname").addEventListener("blur",validate_uname);
document.getElementById("address").addEventListener("blur",validate_address);
document.getElementById("zip").addEventListener("blur",validate_zip);
}

function submit(){
    var c = document.getElementById("uname").value;
    document.getElementById("Result").innerHTML = " Welcome " + c;
//    document.getElementById("invalid_2").innerHTML = "Invalid password";
//    document.getElementById("invalid_3").innerHTML = "First letter must be in caps";
}
 
<!--------------validate_userid------------>
function validate_userid(){
    alert(" User Id validation");
 var str = document.getElementById("userid").value;
    if(!str){
        document.getElementById("validation_1").innerHTML = "You can not leave this field blank";
    }
    else  if((str === undefined || str == null || str.length <= 0) ? true : false){
    }
}
<!------------------validate_password------------>
function validate_password(){
	alert(" password validation");
	var str = document.getElementById("password").value;
	if(!str){
		document.getElementById("validation_2").innerHTML = " You can not leave this field blank ";
	}
	else if(isNaN(str)){
		document.getElementById("validation_2").innerHTML = " Password Can only have numrical digits ";
	}
	else if( ! (/(\d+){5}/).test(str) ) {
		document.getElementById("validation_2").innerHTML = " Invalid password, Minimum 5 digits required ";
	}
	else{
		document.getElementById("validation_2").innerHTML = str;
	}
}

/*--------------validate_uname---------------*/
function validate_uname() {
 alert(" User name validation");
    var str = document.getElementById("uname").value;
    if(!str){
        document.getElementById("validation_3").innerHTML = "U can not leave this field blank";
    }
    else if(str>=5){
        return true;
    }
    else 
        document.getElementById("invalid_3").innerHTML = "Length should be greater than five"
        
 }

<!---------------validate_address------------------>
function validate_address(){
	var str = document.getElementById("address").value;
    if(!str){
        document.getElementById("validation_4").innerHTML = "Address can not e blank";
        }
}

<!--------------validate_zip------------------------->
function validate_zip() {
         var str = document.getElementById("zip").value;
        if(!str){ 
            document.getElementById("validation_5").innerHTML = "You should not leave this field blank";
                 }
    else if(str==5){
        document.getElementById("validatio_5").innerHTML = "Invalid zip ";
    }
 }




//    var str = document.getElementById("password").value;
////	if(!str){
//		document.getElementById("validation").innerHTML = "You can not leave this field blank";
//	}
//	else if(isNaN(str)){
//		document.getElementById("validation").innerHTML = "Password Can only have numrical digits!!!";
//	}
//	else if( ! (/(\d+){5}/).test(str) ) {
//		document.getElementById("validation").innerHTML = "Invalid password, Minimum 5 digits required!!!";
//	}
//	else{
//		document.getElementById("validation").innerHTML = str;
//	}

//function valdate_uname(){
//    var str = document.getElementById("uname").value;
//    if(!str){
//        document.getElementById("validation").innerHTML = "U can not leave this field blank";
//    }
//    else if(str>=5){
//        return true;
//    }
//    else 
//        document.getElementById("validation").innerHTML = "Length should be greater than five"
//        
//}
//}
//
//function validate_address(){
//    
//}
//
//function validate_zip(){
//    
//}
//


//function submit(){
//    var c = document.getElementById("uname").value;
//    document.getElementById("Result").innerHTML = " " + c;
//}
//
//function formValidation()  
//{  
//var uid = document.registration.userid;  
//var passid = document.registration.passid;  
//var uname = document.registration.username;  
//var uadd = document.registration.address;  
//var uzip = document.registration.zip;  
// 
//if(userid_validation(uid,5,10))  
//{  
//if(passid_validation(passid,8,12))  
//{  
//if(allLetter(uname))  
//{  
//if(alphanumeric(uadd))  
//{   
//if(allnumeric(uzip))  
//{  
//}  
//}   
//}  
//}   
//}    
//    
//return false;  
//  
//} 
//
//
//function userid_validation(uid,mx,my)  
//{  
//var uid_len = uid.value.length;  
//if (uid_len == 0 || uid_len >= my || uid_len < mx)  
//{  
//alert("User Id should not be empty / length be between "+mx+" to "+my);  
//uid.focus();  
//return false;  
//}  
//return true;  
//}  
//
//
//function passid_validation(passid,mx,my)  
//{  
//var passid_len = passid.value.length;  
//if (passid_len == 0 ||passid_len >= 8 || passid_len < mx)  
//{  
//alert("Password should not be empty / length be between "+mx+" to "+my);  
//passid.focus();  
//return false;  
//}  
//return true;  
//}  
//
//function allLetter(uname)  
//{   
//var letters = /^[A-Za-z]+$/;  
//if(uname.value.match(letters))  
//{  
//return true;  
//}  
//else  
//{  
//alert('Username must have alphabet characters only');  
//uname.focus();  
//return false;  
//}  
//} 
//
//function alphanumeric(uadd)  
//{   
//var letters = /^[0-9a-zA-Z]+$/;  
//if(uadd.value.match(letters))  
//{  
//return true;  
//}  
//else  
//{  
//alert('User address must have alphanumeric characters only');  
//uadd.focus();  
//return false;  
//}  
//}  
//
//function allnumeric(uzip)  
//{   
//var numbers = /^[0-9]+$/;  
//if(uzip.value.match(numbers))  
//{  
//return true;  
//}  
//else  
//{  
//alert('ZIP code must have numeric characters only');  
//uzip.focus();  
//return false;  
//}  
//}  