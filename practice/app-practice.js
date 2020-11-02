//Select DOM
const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('todoButton');
const todoList = document.querySelector('todoList');
const filterOption = document.querySelector('filterOption');

//EventListener
document.addEventListener('DOMcontentLoaded', refreshTodos);
todoButton.addEventListener('click', addTodo);


//Data Layer
const TODOS = [
    {
        id: 1,
        task: 'Learn CSS',
        completed: false
    },
    {
        id: 2,
        task: 'Learn Javascript',
        completed: false
    }
]

let filter = 'all';

//Logic Layer
function addTodo (e) {
    e.preventDefault();

    const todo = 
    {
        id: `${TODOS.length}`,
        task: todoInput.value,
        completed: false
    };

    if (todoInput.length > 0) {
        TODOS.push(todo);
    }

    refreshTodos();

}


function completeTodo (e) {
    const clickIndex = TODOS.findIndex((todo) => todo.id === e.target.dataset.id);

    if (TODOS[clickIndex].completed === true) {
        TODOS[clickIndex].completed === false
    } else {
        TODOS[clickIndex].completed === true
    };

    refreshTodos();
}


function removeTodo (e) {
    const clickIndex = TODOS.findIndex((todo) => todo.id === e.target.dataset.id)
    TODOS.splice(clickIndex, 1);

    refreshTodos();
}


function filterTodo (e) {
    filter = e.target.value;

    refreshTodos();
}

//UI Logic Layer

function refreshTodos (e) {

    todoList.innerHTML = '';

    TODOS.filter((todo) => {
        switch(filter) {
            case 'all':
                return true;
            case 'completed':
                return todo.completed === true;
            case 'uncompleted':
                return todo.completed === false;
        }
    }).forEach((todo) => {
        const todoDiv = document.createElement('div');
        
        const todoLi = document.createElement('li');

        todoLi.innerText = todo.task;

        todoLi.classList.add('todo-item');

        todoDiv.appendChild(todoLi);

        if (todo.completed === true) {
            todoLi.classList.add ('completed');
        }

        todoInput.value = '';


    //Complete Todo
        const completeButton = document.createElement('button');
        completeButton.innerHTML = <i class = 'fas fa-check'></i>;
        completeButton.classList.add('complete-btn');
        completeButton.setAttribute('data-id', todo.id);
        todoDiv.appendChild(completeButton);

        completeButton.addEventListener('click', completeTodo);

    //Delete Todo
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn')
        deleteButton.innerHTML = <i class = 'fas fa-trash'></i>;
        deleteButton.setAttribute('data-id', todo.id);
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);

        deleteButton.addEventListener('click', removeTodo);

    //Filter Todo
        filterOption.addEventListener('change', filterTodo);
    });
}



