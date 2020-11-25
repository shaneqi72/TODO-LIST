import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import Form from './Components/Form'

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    fetch('http://localhost:4001/todos')
      .then((res) => {
        if (!res.ok) {
          throw Error('Error')
        }
        return res.json();
      })
      .then((todos) => {
        setTodos(todos)
      });
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
