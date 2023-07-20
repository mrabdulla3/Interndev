function addTask() {
    const newTaskInput = document.getElementById('newTaskInput');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList').getElementsByTagName('tbody')[0];

        const row = document.createElement('tr');

        const statusCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        statusCell.appendChild(checkbox);
        row.appendChild(statusCell);

        const taskCell = document.createElement('td');
        taskCell.textContent = taskText;
        row.appendChild(taskCell);

        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteTask(this);
        };
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        taskList.appendChild(row);

        newTaskInput.value = '';
    }
}

function deleteTask(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}