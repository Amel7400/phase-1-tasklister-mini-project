document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const taskDescription = document.getElementById("new-task-description").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    document.getElementById("new-task-description").value = "";
  });
});
