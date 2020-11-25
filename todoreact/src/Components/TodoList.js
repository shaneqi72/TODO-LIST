import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos }) => {

    const updatedTodos = todos.map((todo) => {
        return (<Todo key={todo.id} task={todo.task} />)
    });

    return (
        <div>
            {updatedTodos}
        </div>
    )
};

export default TodoList;