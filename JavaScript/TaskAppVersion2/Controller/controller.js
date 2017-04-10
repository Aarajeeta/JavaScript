window.addEventListener("load", init);

var a;
var b;
function init(){
    a = document.getElementById("taskName");
    b = document.getElementById("taskDesc");
    
    document.getElementById("add").addEventListener("click", add);
}


function add(){
    var ul = document.getElementById("disp");
    var li = document.createElement("li");
    li.innerHTML = a.value + " " + b.value;
    ul.appendChild(li);
    clearBoxes();
}

function clearBoxes(){
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
}