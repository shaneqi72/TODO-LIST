//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", refreshTodos);
todoButton.addEventListener("click", addToDo);
// todoList.addEventListener("click", removeTodo);
//filterOption.addEventListener("click", filterTodo);

// DATA Layer
const TODOS = [
  {
    id: "abc",
    task: "Learn CSS",
    completed: true
  },
  {
    id: "wer",
    task: "Learn JS",
    completed: false
  }
];

let filter = 'all';

// LOGIC LAYER

function addToDo(e) {
  e.preventDefault();

  const newTodo = {
    id: `${TODOS.length}`,
    task: todoInput.value,
    completed: false
  };

  if (newTodo.task.length > 0) {
    TODOS.push(newTodo);
  }
  

  refreshTodos();
}

function completeTodo(e) {
  
  const clickedIndex = TODOS.map((todo) => todo.id).indexOf(e.target.dataset.id);

  if (TODOS[clickedIndex].completed === false) {
    TODOS[clickedIndex].completed = true;
  } else {
    TODOS[clickedIndex].completed = false;
  }

  // More elegant solution
  // TODOS[clickedIndex].completed = !TODOS[clickedIndex].completed;

  // Using ternaries
  // TODOS[clickedIndex].completed = (TODOS[clickedIndex].completed ? false : true);

  refreshTodos();
}

function removeTodo(e) {
  const clickedIndex = TODOS.findIndex((todo) => todo.id === e.target.dataset.id);

  console.log(clickedIndex);

  TODOS.splice(clickedIndex, 1);
  
  refreshTodos();
}

function filterTodo (e) {
  filter = e.target.value;

  refreshTodos();
}

///////////// UI LOGIC BELOW ///////////////

// Refreshes the UI
// TODO: support completed: true
function refreshTodos() {

  todoList.innerHTML = "";

  TODOS.filter((todo) => {
    switch (filter) {
      case 'all':
        return true;
      case 'completed':
        return todo.completed === true;
      case 'uncompleted':
        return todo.completed === false;
    }
    return true;
  }).forEach((todo) => {
    // Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create todo content
    const newTodo = document.createElement("li");
    newTodo.innerText = todo.task //+ (todo.completed ? ' (completed)' : '');
    newTodo.classList.add("todo-item");

    if (todo.completed) {
      newTodo.classList.add('completed');
    }

    todoDiv.appendChild(newTodo);

    todoInput.value = "";
    // Create Complete Button
    const completedButton = document.createElement("button");
    completedButton.setAttribute('data-id', todo.id);
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    completedButton.addEventListener('click', completeTodo);

    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.setAttribute('data-id', todo.id);
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);

    trashButton.addEventListener('click', removeTodo);

    //Filter to do
    filterOption.addEventListener('change', filterTodo);
    });
}

    // // Sol 1
    // // trashButton.setAttribute('data-id', todo.id);
    // // Sol 2
    // // trashButton.addEventListener('click', (e) => {
    // //   console.log(todo.id);
    // //   removeTodo(id);
    // // })