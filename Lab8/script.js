'use strict'

var form = document.querySelector('.needs-validation');
var ul_element = document.getElementById("listOfTasks");
var add_btn = document.getElementById("submit");
var remove_btns;
var arrayOfTasks = [];

// Check if there is tasks in local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger get tasks from local storage 
getTasksFromLocalStorage();

add_btn.addEventListener('click', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        form.classList.add('was-validated');
        event.stopPropagation();
    }
    else {
        var task_name = document.getElementById("validationCustomUsername");
        var task = {
            id: Date.now(),
            name: task_name.value,
            completed: false,
        }
        addTask(task);
        arrayOfTasks.push(task);
        addTasksToLocalStorageFrom(arrayOfTasks);
    }
    task_name.value = '';
});

function addTask(task) {
    ul_element.style.overflowY = "scroll";

    var li_element = document.createElement('li');
    li_element.classList.add('container', 'my-2', 'mx-0', 'list-group-item', 'shadow-lg', 'bg-light', 'rounded-4');
    li_element.setAttribute('id', task.id);

    var inner_div = document.createElement('div');
    inner_div.classList.add("row");

    var p_element = document.createElement('p');
    p_element.classList.add('col-md-10', 'my-auto', 'ps-3', 'mb-1', 'mb-md-0');

    var textNode = document.createTextNode(task.name);
    p_element.appendChild(textNode);

    var done_icon = document.createElement("i");
    done_icon.classList.add('col-6', 'col-md-1', 'bi', 'bi-check2-circle', 'border-5', 'bg-light', 'rounded', 'text-center', 'my-auto');
    done_icon.style.color = "green";
    done_icon.style.fontSize = "20px";
    done_icon.dataset.accessId = "done";
    done_icon.setAttribute('role', 'button');


    var remove_icon = document.createElement("i");
    remove_icon.classList.add('col-6', 'col-md-1', 'bi', 'bi-trash', 'text-center', 'my-auto');
    remove_icon.style.color = "rgb(180, 7, 7)";
    remove_icon.style.fontSize = "20px";
    remove_icon.dataset.accessId = "remove";
    remove_icon.setAttribute('role', 'button');


    inner_div.append(p_element, done_icon, remove_icon);
    li_element.appendChild(inner_div);
    ul_element.appendChild(li_element);

    // return saved status
    if (task.completed) {
        li_element.classList.remove('bg-light')
        li_element.classList.add('text-decoration-line-through')
        li_element.style.backgroundColor = "#bcf2bf ";
    }
}
ul_element.addEventListener("click", function (e) {
    // Delete button
    if (e.target.dataset.accessId == "remove") {
        // Remove Task from local storage
        // Get the parent of delete button and pass its attribute to delete the whole task
        var parent_li = e.target.parentElement.parentElement
        // Remove task from page
        parent_li.remove();
        deleteTaskFromLocalStorage(parent_li.getAttribute("id"));
        console.log(e.target.parentElement.parentElement)
    }

    // When click on task elemnt to spicify that its done
    if (e.target.dataset.accessId == "done") {
        var parent_li = e.target.parentElement.parentElement;
        toggleStatuesTask(parent_li.getAttribute("id"));
        console.log(parent_li.getAttribute("id"))
        console.log(e.target.parentElement.parentElement)
        parent_li.classList.toggle('bg-light');
        parent_li.classList.toggle('text-decoration-line-through')
        parent_li.style.backgroundColor = "#bcf2bf ";
    }
});

function addTasksToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getTasksFromLocalStorage() {
    var data = localStorage.getItem("tasks");
    if (data) {
        var tasks = JSON.parse(data);
        for (let i = 0; i < tasks.length; i++) {
            addTask(tasks[i]);
        }
    }
}
function deleteTaskFromLocalStorage(taskId) {
    // Update array of tasks after filtering the task we want to remove
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addTasksToLocalStorageFrom(arrayOfTasks);
}
function toggleStatuesTask(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ?
                (arrayOfTasks[i].completed = true) :
                (arrayOfTasks[i].completed = false);
        }
    }
    addTasksToLocalStorageFrom(arrayOfTasks);
}

