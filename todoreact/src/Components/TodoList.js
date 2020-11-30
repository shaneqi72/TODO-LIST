import React from 'react';
import Todo from './Todo';
import '../App.css'

const TodoList = ({ todos, status, refreshTodos }) => {

    return (
        <div className='todo-list'>
            {todos.map((todo, index) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        refreshTodos={refreshTodos}
                    />
                )
            })}
        </div>
    )
};

export default TodoList;