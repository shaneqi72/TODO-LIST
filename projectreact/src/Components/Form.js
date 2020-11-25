import React, { useState } from 'react';
import '../App.css'



const Form = ({ todos, setTodos, inputText, setInputText, status, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventdefault();
        setTodos([...todos, {
            text: inputText, complete: false, id: Math.random() * 100
        }])
        setInputText('');
    };

    const statusChangeHandler = (e) => [
        setStatus(e.target.value)
    ]


    return (
        <div>
            <form action="">
                <input className='todo-input' type="text" value={inputText} onChange={inputTextHandler} />
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
