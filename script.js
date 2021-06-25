const { ipcRenderer } = require('electron');

let list = document.getElementById("list");
let newTask = document.getElementById("newTask");

document.getElementById("addTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${newTask.value}</li>`)
    ipcRenderer.invoke('show-notification', newTask.value);
    newTask.value = '';
});