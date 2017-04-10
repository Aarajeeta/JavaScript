window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addStudentInLIst);
    document.getElementById("update").addEventListener("click",updateList);
    document.getElementById("sort").addEventListener("click",sortList);
    document.getElementById("delete").addEventListener("click",deleteSelectedItem);
    
}
function addStudentInList(){
    var rollno = document.getElementById("rollno").value;
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var course = document.getElementById("course").value;
}
function updateList(){
    
}
function sortList(){
    
}
function deleteSelectedItem(){
    
}