import React, { useState } from 'react';


const Form = ({ todos, setTodos }) => {

    const [inputText, setInputText] = useState('')

    const handleInputText = (e) => {
        setInputText(e.target.value)
    };

    const newTodo = {
        id: `${todos.length}`,
        task: inputText,
        completed: false
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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
                    setTodos([...todos, newTodo])
                })
                .catch((err) => console.log(err))

        };
        setInputText('');
    }

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputText} />
            <button type='submit' onClick={handleSubmit}>+</button>
        </div>
    )
};

export default Form;