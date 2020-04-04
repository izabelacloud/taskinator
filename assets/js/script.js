console.dir(window.document);
// var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
console.log(formEl);
var tasksToDoEl = document.querySelector("#tasks-to-do");



var taskFormHandler = function(event) {
    event.preventDefault();
    // console.log(event);
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskNameInput);
    console.dir(taskNameInput);
    console.log(taskTypeInput);

    // var listItemEl = document.createElement("li");
    // listItemEl.className = "task-item";
    // // listItemEl.textContent = "This is a new task.";
    // listItemEl.textContent = taskNameInput;
    // tasksToDoEl.appendChild(listItemEl);

    //end of original code

    if(!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();

    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);



}


var createTaskEl = function(taskDataObj) {
    //new code
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

}

// buttonEl.addEventListener("click", taskFormHandler);
formEl.addEventListener("submit", taskFormHandler);

