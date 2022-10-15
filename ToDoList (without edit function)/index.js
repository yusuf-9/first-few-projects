
function save() {
    var todo_title = document.getElementById('todo-title').value;
    var todo_desc = document.getElementById('todo-description').value;
    if (localStorage.getItem('todos') == null) {
        todos_arr = [];
        todos_arr.push([todo_title, todo_desc]);
        localStorage.setItem("todos", JSON.stringify(todos_arr));
        todos_str = localStorage.getItem("todos");
        todos_arr = JSON.parse(todos_str);
        var table = document.getElementsByTagName('table');
        var btn = document.createElement('button');
        btn.id = 'donebtn';
        btn.innerText = "Done";
        var newrow = table[0].insertRow();
        newcell1 = newrow.insertCell();
        newcell2 = newrow.insertCell();
        newcell3 = newrow.insertCell();
        newcell4 = newrow.insertCell();
        var sNo = todos_arr.length;
        newcell1.innerHTML = sNo;
        newcell2.innerHTML = todos_arr[(sNo - 1)][0];
        newcell3.innerHTML = todos_arr[(sNo - 1)][1];
        newcell4.appendChild(btn);
        btn.addEventListener("click", function (x) {
            var tbody = document.getElementById('tbody')
            var row = x.target.parentNode.parentNode;
            todos_str = localStorage.getItem("todos");
            todos_arr = JSON.parse(todos_str);
            todos_arr.splice((row.rowIndex - 2), 1)
            localStorage.setItem("todos", JSON.stringify(todos_arr))
            tbody.removeChild(row)

        })

    }
    else {
        todos_str = localStorage.getItem("todos");
        todos_arr = JSON.parse(todos_str);
        todos_arr.push([todo_title, todo_desc]);
        localStorage.setItem("todos", JSON.stringify(todos_arr))
        todos_str = localStorage.getItem("todos");
        todos_arr = JSON.parse(todos_str);
        var table = document.getElementsByTagName('table');
        var btn = document.createElement('button');
        btn.id = 'donebtn';
        btn.innerText = "Done";
        var newrow = table[0].insertRow();
        newcell1 = newrow.insertCell();
        newcell2 = newrow.insertCell();
        newcell3 = newrow.insertCell();
        newcell4 = newrow.insertCell();
        var sNo = todos_arr.length;
        newcell1.innerHTML = sNo;
        newcell2.innerHTML = todos_arr[(sNo - 1)][0];
        newcell3.innerHTML = todos_arr[(sNo - 1)][1];
        newcell4.appendChild(btn);
        btn.addEventListener("click", function (x) {
            var tbody = document.getElementById('tbody')
            var row = x.target.parentNode.parentNode;
            todos_str = localStorage.getItem("todos");
            todos_arr = JSON.parse(todos_str);
            todos_arr.splice((row.rowIndex - 2), 1)
            localStorage.setItem("todos", JSON.stringify(todos_arr))
            tbody.removeChild(row)

        })

    }
    document.getElementById('todo-title').value = ""
    document.getElementById('todo-description').value = ""

}

todos_str = localStorage.getItem("todos");
todos_arr = JSON.parse(todos_str);

function log() {
    for (var i = 0; i < todos_arr.length; i++) {
        var table = document.getElementsByTagName('table');
        var btn = document.createElement('button');
        btn.classList.add('done-button');
        btn.innerText = "Done";
        var newrow = table[0].insertRow();
        newcell1 = newrow.insertCell();
        newcell2 = newrow.insertCell();
        newcell3 = newrow.insertCell();
        newcell4 = newrow.insertCell();
        var sNo = todos_arr.length;
        newcell1.innerHTML = i + 1;
        newcell2.innerHTML = todos_arr[i][0];
        newcell3.innerHTML = todos_arr[i][1];
        newcell4.appendChild(btn);
        btn.addEventListener("click", function (x) {
            var tbody = document.getElementById('tbody')
            var row = x.target.parentNode.parentNode;
            todos_str = localStorage.getItem("todos");
            todos_arr = JSON.parse(todos_str);
            todos_arr.splice((row.rowIndex - 2), 1)
            localStorage.setItem("todos", JSON.stringify(todos_arr))
            tbody.removeChild(row)

        })

    }
}
log()








