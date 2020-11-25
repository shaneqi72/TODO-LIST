import React, { useState, useEffect } from 'react';
import '../src/App.css'
import Form from './Components/Form';
import TodoList from './Components/Todolist'


function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilterTodos] = useState([])

  const filterHandler = () => {
    switch (status) {
      case 'complete':
        setFilterTodos(todos.map((todo) => todo.complete === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.map((todo) => todo.complete === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [status])


  return (
    <div className="App">
      <header className="App-header">
        Shane's Todo List
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus} filterHandler={filterHandler} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} status={status} setStatus={setStatus} />
    </div>
  );
}

export default App;

// ***************************************************************************************************************************************************************************************
function getTodos() {
  fetch('http://localhost:4001/todos')
    .then((res) => {
      if (!res.ok) {
        throw Error('Error')
      }
      return res.json();
    })
    .then((todos) => {
      TODOS = todos;
      refreshTodos();
    });
}

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

  fetch('http://localhost:4001/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  })
    .then(() => {
      getTodos();
    })
    .catch((err) => console.log(err))
}

function completeTodo(e) {

  const clickedIndex = TODOS.map((todo) => todo.id).indexOf(e.target.dataset.id);

  if (TODOS[clickedIndex].completed === false) {
    TODOS[clickedIndex].completed = true;
  } else {
    TODOS[clickedIndex].completed = false;
  }

  fetch(`http://localhost:4001/todos/${e.target.dataset.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(TODOS[clickedIndex])
  })
    .then(() => {
      getTodos()
    })
    .catch((err) => console.log(err))
}

function removeTodo(e) {
  fetch(`http://localhost:4001/todos/${e.target.dataset.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => {
      getTodos();
    })
}

function filterTodo(e) {
  filter = e.target.value;

  fetch('http://localhost:4001/todos')
    .then((res) => res.json())
    .then((todos) => {
      // getTodos();
    })
    .catch((err) => console.log(err))
}