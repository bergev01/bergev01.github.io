window.onload=function() {
  restorelist("todoul", doneTask);
  }

addTask=function() {
  var todolist, box, newlist, taskstuff, addtask, newpriority; 
  todolist=document.querySelector("#todoul");
  newlist=document.createElement("li");
  newpriority=document.querySelector("#priority").value;
  newlist.className=newpriority;
  box=document.createElement("input");
  box.type="checkbox"; 
  box.onclick=doneTask;
  taskstuff=document.querySelector("#taskbox").value;
  addtask=document.createTextNode(taskstuff);
  newlist.appendChild(box);
  newlist.appendChild(addtask);
  todolist.appendChild(newlist);
  localSave("todoul");
}

doneTask=function() {
  if(this.checked){
    this.parentNode.classList.add("done");
    localSave("todoul");
  } else {
    this.parentNode.classList.remove("done");
    localSave("todoul");
  }
}
