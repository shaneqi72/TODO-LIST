//DOM selector
const todoButton = document.querySelector('.todoButton');
const todoInput = document.querySelector('.todoInput');
const todoList = document.querySelector('.todoList');
const filterOption = document.querySelector('.filterOption');

document.addEventListener('DOMcontentLoaded', refreshTodos);
todoButton.addEventListener('click', addTodo);


//Data Layer
const TODOS = [
    {
        id: 1,
        task: 'Learn JS',
        completed: false
    }
]

let filter = 'all';


//Logic Layer
function addTodo(e) {
    e.preventDefault();
    const newTodo = 
    {
        id: `${TODOS.length}`,
        task: todoInput.value,
        completed: false
    };

    if (todoInput.length > 0) {
        TODOS.push(newTodo)
    };
    
    refreshTodos();
}

function completeTodo (e) {
    const clickIndex = TODOS.findIndex((todo) => todo.id === e.target.dataset.id);
    if (TODOS[clickIndex].completed === false) {
        TODOS[clickIndex].completed = true
    } else {
        TODOS[clickIndex].completed = false
    }

    refreshTodos();
}

function removeTodo (e) {
    const clickIndex = TODOS.findIndex((todo) => todo.id === e.target.dataset.id);
    TODOS.splice(clickIndex, 1);

    refreshTodos();
}

function filterTodo (e) {
    filter = e.target.value;
    refreshTodos();
}

//UI logic

function refreshTodos(e) {

    todoList.innerHTML = '';

    TODOS.filter ((todo) => {
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
        const todoItems = document.createElement('div');
        todoItems.classList.add('todo-item');

        const newTodo = document.createElement('li');
        newTodo.innerText = todo.task;

        if (todo.completed === true) {
            newTodo.classList.add('completed')
        }

        todoItems.appendChild(newTodo);

        todoInput.value = '';

        //Complete Button
        const completeButton = document.createElement('button');
        completeButton.innerHTML = <i class = "fas fa-check"></i>;
        completeButton.classList.add('complete-btn');
        completeButton.setAttribute('data-id', todo.id);
        todoItems.appendChild(completeButton);

        completeButton.addEventListener('click', completeTodo);

        //Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('trash-btn');
        deleteButton.setAttribute('data-id', todo.id);
        todoItems.appendChild(deleteButton);

        todoList.appendChild(todoItems);

        deleteButton.addEventListener('click', removeTodo);

        //Filter

        filterOption.addEventListener('change', filterTodo);

        


    })
}




