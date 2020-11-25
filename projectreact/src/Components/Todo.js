import React, { useState } from 'react';
import '../App.css'

const Todo = ({ text, todos, setTodos, todo }) => {

    const completeHandler = () => {
        todos.map((item) => {
            if (item.id === todo.id) {
                fetch(`http://localhost:4001/todos/${item.id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                    .then(() => {
                        setTodos([...todos, {
                            complete: !item.complete
                        }])
                    })
                    .catch((err) => console.log(err))
            }
            return item;
        });
    };

    const deleteHandler = () => {
        todos.map((item) => {
            if (item.id === todo.id) {
                fetch(`http://localhost:4001/todos/${e.target.dataset.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(() => {
                        todos.fiter((item) => {
                            return item.id !== todo.id
                        })
                    })
            }
            return item;
        })
    };

    return (
        <div className='todo'>
            <ul>
                <li className={`todo-item ${todo.complete ? 'complete' : ''}`}>{text}</li>
            </ul>
            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='delete-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
};

export default Todo;