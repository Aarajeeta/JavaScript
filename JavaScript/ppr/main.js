window.addEventListener("load",init);
function init(){
    document.getElementById("result").addEventListener("click",submit);
}
function submit(){
    alert("are sure want to submit ur order");
    var c = document.getElementById("uname").value;
    document.getElementById("Result").innerHTML = " Welcome " + c;
}
