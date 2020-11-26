import React from 'react';
import Todo from './Todo'

const TodoList = ({ todos, status, refreshTodos }) => {

    return (
        <div>
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