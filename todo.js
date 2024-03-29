
let todoList = [];
let todoListDate = [];
function addTask(){
    let inputElement = document.querySelector('#todoInput');
    let inputDate = document.querySelector('#dateOfTask');
    let todoItem = inputElement.value;
    let todoDate = inputDate.value;
    if(!todoItem || !todoDate) return;
    todoList.push(todoItem);
    todoListDate.push(todoDate);
    inputElement.value = '';
    inputDate.value = '';
    displayTask()

}

function displayTask(){
    let containerElement = document.querySelector('#tableOfContent');
    let newHtml = `<tr>
    <td><input type="text" placeholder="Enter Todo Here" id="todoInput"></td>
    <td><input type="date" name="date" id="dateOfTask"></td>
    <td><button id="addBtn" onclick="addTask();">Add</button></td>
</tr>
<tr>
    <th>Pending Tasks</th>
    <th>Due Date</th>
    <th>Mark Done</th>
</tr>`;
    

    for(let i = todoList.length-1;i>=0;i--){
        newHtml += `<tr>
        <td>${todoList[i]}</td>
        <td>${todoListDate[i]}</td>
        <td><button class = "deleteBtn" onClick ="todoList.splice(${i},1);
        todoListDate.splice(${i},1); displayTask()">Delete</button></td>
        </tr>`
    }
    containerElement.innerHTML = newHtml;
}
