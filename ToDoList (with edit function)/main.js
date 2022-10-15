document.getElementsByClassName('task-input-form')[0].addEventListener('submit', (e) => {
    e.preventDefault()
})

function focusing() {
    const addTask = document.getElementById("task-input");
    if (addTask.value == '') {
        addTask.focus()
    }
    else {

        if (localStorage.getItem('tasks') == null) {
            // saving task content in local storage
            var tasksArray = [];
            tasksArray.push([addTask.value])
            // adding main task div to task list
            var newTask = document.createElement('div');
            newTask.classList.add('task');
            var taskList = document.getElementById('tasks');
            taskList.appendChild(newTask);
            // adding content input into task div
            var taskContent = document.createElement('input')
            taskContent.type = 'text'
            taskContent.classList.add('task-cont')
            taskContent.value = tasksArray[0][0];
            localStorage.setItem('tasks',JSON.stringify(tasksArray))
            taskContent.setAttribute("readonly", "readonly")
            newTask.appendChild(taskContent);
            // adding edit button 
            var editBtn = document.createElement('button')
            editBtn.type = 'button'
            editBtn.classList.add('edit-btn')
            editBtn.classList.add('taskbtn')
            editBtn.innerText = "EDIT"
            newTask.appendChild(editBtn)
            // adding delete button 
            var deleteBtn = document.createElement('button')
            deleteBtn.type = 'button'
            deleteBtn.classList.add('delete-btn')
            deleteBtn.classList.add('taskbtn')
            deleteBtn.innerText = "DELETE"
            newTask.appendChild(deleteBtn)
            // adding functionality to edit and delete buttons
            editBtn.addEventListener('click', function editText(x) {
                if (editBtn.innerText == 'EDIT') {
                    taskContent.removeAttribute("readonly");
                    taskContent.focus();
                    editBtn.innerText = "SAVE";
                }
                else {
                    var tasksString = localStorage.getItem('tasks')
                    tasksArray = JSON.parse(tasksString)
                    var parent = x.target.parentNode;
                    var childArray = Array.from(taskList.children)
                        tasksArray[(childArray.indexOf(parent))][0] = taskContent.value;
                        localStorage.setItem('tasks', JSON.stringify(tasksArray))
                        taskContent.blur()
                        taskContent.setAttribute("readonly", "readonly")
                        editBtn.innerText = "EDIT";
                }
            })
            deleteBtn.addEventListener('click', function deleted(x) {
                var tasksString = localStorage.getItem('tasks')
               tasksArray = JSON.parse(tasksString)
               var parent = x.target.parentNode;
               var childArray = Array.from(taskList.children)
               tasksArray.splice(childArray.indexOf(parent), 1)
               localStorage.setItem('tasks', JSON.stringify(tasksArray))
               taskList.removeChild(parent)
       })
            addTask.value = ''
        }
        
    else {
            // adding main task div to task list
            var newTask = document.createElement('div');
            newTask.classList.add('task');
            var taskList = document.getElementById('tasks');
            taskList.appendChild(newTask);
            // adding content input into task div
            var taskContent = document.createElement('input')
            taskContent.type = 'text'
            taskContent.classList.add('task-cont')
            tasksArray = JSON.parse(localStorage.getItem('tasks'));
            tasksArray.push([addTask.value]);
            taskContent.value = tasksArray[(tasksArray.length - 1)][0];
            localStorage.setItem('tasks', JSON.stringify(tasksArray))
            taskContent.setAttribute("readonly", "readonly")
            newTask.appendChild(taskContent);
            // adding edit button 
            var editBtn = document.createElement('button')
            editBtn.type = 'button'
            editBtn.classList.add('edit-btn')
            editBtn.classList.add('taskbtn')
            editBtn.innerText = "EDIT"
            newTask.appendChild(editBtn)
            // adding delete button 
            var deleteBtn = document.createElement('button')
            deleteBtn.type = 'button'
            deleteBtn.classList.add('delete-btn')
            deleteBtn.classList.add('taskbtn')
            deleteBtn.innerText = "DELETE"
            newTask.appendChild(deleteBtn)
            // adding functionality to edit and delete buttons
            editBtn.addEventListener('click', function editText(x) {
                if (editBtn.innerText == 'EDIT') {
                    taskContent.removeAttribute("readonly");
                    taskContent.focus();
                    editBtn.innerText = "SAVE";
                }
                else {
                    var tasksString = localStorage.getItem('tasks')
                tasksArray = JSON.parse(tasksString)
                var parent = x.target.parentNode;
                var childArray = Array.from(taskList.children)
                    tasksArray[(childArray.indexOf(parent))][0] = taskContent.value;
                    localStorage.setItem('tasks', JSON.stringify(tasksArray))
                    taskContent.blur()
                    taskContent.setAttribute("readonly", "readonly")
                    editBtn.innerText = "EDIT";
                }
            })
            deleteBtn.addEventListener('click', function deleted(x) {
                var tasksString = localStorage.getItem('tasks')
                tasksArray = JSON.parse(tasksString)
                var parent = x.target.parentNode;
                var childArray = Array.from(taskList.children)
                tasksArray.splice(childArray.indexOf(parent), 1)
                localStorage.setItem('tasks', JSON.stringify(tasksArray))
                taskList.removeChild(parent)
        })
            addTask.value = ''
            
        }
        
    }
}



function loadTasksFromStorage(){
    var tasksString = localStorage.getItem('tasks');
    var tasksArray = JSON.parse(tasksString);
    for(var i = 0; i < tasksArray.length; i++){
        // adding main task div to task list
        var newTask = document.createElement('div');
        newTask.classList.add('task');
        var taskList = document.getElementById('tasks');
        taskList.appendChild(newTask);
        // adding content input into task div
        var taskContent = document.createElement('input')
        taskContent.type = 'text'
        taskContent.classList.add('task-cont')
        taskContent.value = tasksArray[i];
        taskContent.setAttribute("readonly", "readonly")
        newTask.appendChild(taskContent);
        // adding edit button 
        var editBtn = document.createElement('button')
        editBtn.type = 'button'
        editBtn.classList.add('edit-btn')
        editBtn.classList.add('taskbtn')
        editBtn.innerText = "EDIT"
        newTask.appendChild(editBtn)
        // adding delete button 
        var deleteBtn = document.createElement('button')
        deleteBtn.type = 'button'
        deleteBtn.classList.add('delete-btn')
        deleteBtn.classList.add('taskbtn')
        deleteBtn.innerText = "DELETE"
        newTask.appendChild(deleteBtn)
        // adding functionality to edit and delete buttons
        editBtn.addEventListener('click', function editText(x) {
            var editBtnArray = document.getElementsByClassName("edit-btn")
            var taskContentArray = document.getElementsByClassName('task-cont')
            var parent = x.target.parentNode;
            var childArray = Array.from(taskList.children)
            if (editBtnArray[childArray.indexOf(parent)].innerText == 'EDIT') {
                taskContentArray[childArray.indexOf(parent)].removeAttribute("readonly");
                taskContentArray[childArray.indexOf(parent)].focus();
                editBtnArray[childArray.indexOf(parent)].innerText = "SAVE";
            }
            else {
                var tasksString = localStorage.getItem('tasks')
                tasksArray = JSON.parse(tasksString)
                    tasksArray[(childArray.indexOf(parent))][0] = taskContentArray[childArray.indexOf(parent)].value;
                    localStorage.setItem('tasks', JSON.stringify(tasksArray))
                    taskContentArray[childArray.indexOf(parent)].blur()
                    taskContentArray[childArray.indexOf(parent)].setAttribute("readonly", "readonly")
                    editBtnArray[childArray.indexOf(parent)].innerText = "EDIT";
            }
        })
        deleteBtn.addEventListener('click', function deleted(x) {
            tasksString = localStorage.getItem('tasks')
            tasksArray = JSON.parse(tasksString)
            var parent = x.target.parentNode;
            var childArray = Array.from(taskList.children)
            tasksArray.splice(childArray.indexOf(parent), 1)
            localStorage.setItem('tasks', JSON.stringify(tasksArray))
            taskList.removeChild(parent)
    })
    
}}

loadTasksFromStorage()


