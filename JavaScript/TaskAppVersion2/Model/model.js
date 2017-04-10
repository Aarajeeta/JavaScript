var taskobj = {
    taskList : [],
    id : 0,
    add : function(id, name, desc){
        var obj = new Task(taskobj.id, name, desc)
    }
}