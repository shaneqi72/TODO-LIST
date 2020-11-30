import React, { useState } from 'react';
import '../App.css'


const Form = ({ refreshTodos, status, setStatus }) => {

    const [inputText, setInputText] = useState('')

    const handleInputText = (e) => {
        setInputText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: `${Date.now()}`,
            task: inputText,
            completed: false
        };

        if (newTodo.task.length > 0) {
            fetch('http://localhost:4001/todos', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            })
                .then(() => {
                    refreshTodos();
                })
                .catch((err) => console.log(err))

        };
        setInputText('');
    };

    const handleChange = (e) => {
        setStatus(e.target.value);
    }


    return (
        <div className='form'>
            <input type="text" value={inputText} onChange={handleInputText} />
            <button type='submit' onClick={handleSubmit}>+</button>
            <div className='filter-status'>
                <select onChange={handleChange} name="todos" >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>
    )
};

export default Form;