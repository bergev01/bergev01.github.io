newTask=function() {
  var todolist, box, newitem, taskstuff, addtask, newclass; 
  todolist=document.querySelector("#todolist");
  newitem=document.createElement("li");
  newclass=document.querySelector("#priority").value;
  newitem.className=newclass;
  box=document.createElement("input");
  box.type="checkbox"; 
  taskstuff=document.querySelector("#taskbox").value;
  addtask=document.createTextNode(taskstuff);
  newitem.appendChild(box);
  newitem.appendChild(addtask);
  todolist.appendChild(newitem);
}
