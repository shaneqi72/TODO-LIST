import React from 'react';
import '../App.css'

const Todo = ({ todo, refreshTodos }) => {


    const deleteTodo = () => {

        fetch(`http://localhost:4001/todos/${todo.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(() => {
                refreshTodos();
            });
    };

    const completeTodo = () => {
        fetch(`http://localhost:4001/todos/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: todo.task, completed: !todo.completed })
        })
            .then(() => {
                refreshTodos();
            });
    };

    return (
        <div className='todo'>
            <li className='todo-task' style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.task}</li>
            <button className='delete-btn' onClick={deleteTodo}>delete</button>
            <button className='complete-btn' onClick={completeTodo}>complete</button>
        </div>
    )
};

export default Todo;
