document.getElementById("add-button").addEventListener("click", function() {
    var task = document.getElementById("task").value;
    var tasks = document.getElementById("tasks");
    var newTask = document.createElement("li");
    newTask.innerHTML = task;
    tasks.appendChild(newTask);
  });
  document.getElementById("tasks").addEventListener("click", function(event) {
    var task = event.target;
    task.parentNode.removeChild(task);
  });
    