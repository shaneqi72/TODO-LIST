import React, { useEffect } from 'react';

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
        <div>
            <li>{todo.task}</li>
            <button onClick={deleteTodo}>delete</button>
            <button onClick={completeTodo}>complete</button>
        </div>
    )
};

export default Todo;
