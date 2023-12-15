function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskItem = document.createElement("li");
    taskItem.className = "task-item";

    var taskName = document.createElement("span");
    taskName.className = "task-name";
    taskName.textContent = taskInput.value;

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      taskList.removeChild(taskItem);
    };

    var doneBtn = document.createElement("button");
    doneBtn.className = "done-btn";
    doneBtn.textContent = "Done";
    doneBtn.onclick = function() {
      taskItem.style.backgroundColor = "#dff0d8";
      doneBtn.disabled = true;
    };

    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteBtn);
    taskItem.appendChild(doneBtn);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }