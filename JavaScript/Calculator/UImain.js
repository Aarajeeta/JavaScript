window.addEventListener("load", init);

function init(){
document.getElementById("submit").addEventListener("click",submit);
}


function submit() {
//    var a = document.getElementById("firstname").value;
//    var b = document.getElementById("lastname").value;
  var c = document.getElementById("firstname").value + " " + document.getElementById("lastname").value;
    document.getElementById("testResult").innerHTML = " Hi " + c;
}
