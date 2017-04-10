window.addEventListener("load", init);

var a;
var b;
var c = 0;
function init(){
a = document.getElementById("firstnum");
b = document.getElementById("secondnum");
document.getElementById("add").addEventListener("click",add);
document.getElementById("sub").addEventListener("click",sub);
}


function add() {
    c = parseInt(a.value) + parseInt(b.value);
    result();
}
function sub() {
    c = parseInt(a.value) - parseInt(b.value);
    result();
}
function result(){
document.getElementById("result").innerHTML = "Result is "+ c;
}