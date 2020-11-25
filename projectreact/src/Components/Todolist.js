import React, { useState } from 'react';
import '../App.css'
import Todo from './Todo'


const TodoList = ({ todos, setTodos, filteredTodos }) => {
    const updatedTodos = () => {
        filteredTodos.map((todo) => {
            return (<Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />)
        })
    }

    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {updatedTodos}
            </ul>
        </div>
    )
};

export default TodoList;