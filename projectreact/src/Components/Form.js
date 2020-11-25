import React, { useState } from 'react';
import '../App.css'



const Form = ({ todos, setTodos, inputText, setInputText, status, setStatus }) => {

    const handleTextChange = (e) => {
        setInputText(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventdefault();

        const newTodo = {
            id: Math.random() * 100,
            task: inputText,
            completed: false
        };

        if (newTodo.text.length > 0) {
            fetch('http://localhost:4001/todos', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            })
                .then(() => {
                    setTodos([...todos, newTodo])
                })
                .catch((err) => console.log(err))

        };

        setInputText('');
    };

    const statusChangeHandler = (e) => [
        setStatus(e.target.value)
    ]


    return (
        <div>
            <form action="">
                <input className='todo-input' type="text" value={inputText} onChange={handleTextChange} />
                <button className='todo-button' type='submit' onClick={submitHandler} ><i className='fas fa-plus-square'></i></button>
                <div className='select'>
                    <select className='filter-todo' onChange={statusChangeHandler} name="todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
};

export default Form;
