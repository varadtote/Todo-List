// let taskAddBtn = document.querySelector('.task-add-btn');
// let taskInput = document.querySelector('.input-task');

// taskAddBtn.addEventListener('click', function () {
//     addTask(taskInput.value);
// });

// var task_list_array = [];

// function addTask(task) {
//     task_list_array.push(task);
//     renderTasks();
// }

// function renderTasks() {
//     let task_list = document.querySelector('.task-list');
//     task_list.innerHTML = ''; // Clear the list before re-rendering
//     taskInput.value = ''
//     task_list_array.forEach(task => {
//         let newtask = document.createElement('div');
//         newtask.setAttribute('class', newtask)
//         newtask.textContent = task;
//         task_list.appendChild(newtask);
//     });
// }


let addNewProject = document.querySelector('.new-project-btn');
let projectForm = document.querySelector('.projectForm');
let closeForm = document.querySelector('.close-form');
let formProjectBtn = document.querySelector('.formProjectBtn');


// Display Form
addNewProject.addEventListener('click', () => {
    displayForm();
})
function displayForm() {
    projectForm.classList.add('projectFormVisible');
    projectForm.classList.remove('projectForm');
}

// Remove Form
closeForm.addEventListener('click', () => {
    removeForm();
})
function removeForm() {
    projectForm.classList.remove('projectFormVisible');
    projectForm.classList.add('projectForm');
}

var projectListArray = []

function addProject(event) {
    event.preventDefault();
    var projectNameInput = document.getElementById('projectName');
    if (projectNameInput.value < 1) {
        alert('Type Something')
    } else {
        projectListArray.push(projectNameInput.value);
        console.log(projectListArray)
        projectNameInput.value = ''
        removeForm();
        addProjectToSideBar();
    }

}



function addProjectToSideBar() {
    let projectList = document.querySelector('.project-list');
    projectList.innerHTML = ''
    projectListArray.forEach(project => {
        let projectList = document.querySelector('.project-list');
        let newProject = document.createElement('div');
        newProject.setAttribute('class', 'project');
        newProject.textContent = project;
        projectList.appendChild(newProject);
    })


}