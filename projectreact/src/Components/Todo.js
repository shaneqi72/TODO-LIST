import React, { useState } from 'react';
import '../App.css'

const Todo = ({ text, todos, setTodos, todo }) => {

    const completeHandler = () => {
        todos.map((item) => {
            if (item.id === todo.id) {
                setTodos([...item, {
                    complete: !item.complete
                }])
            }
            return item;
        });
    };

    const deleteHandler = () => {
        todos.fiter((item) => {
            return item.id !== todo.id
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