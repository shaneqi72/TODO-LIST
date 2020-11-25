const express = require('express');

const { readTodos, writeTodos } = require('./databaseOperation_practice');

const toDoRouter = express.Router();

toDoRouter.get('/', (req, res) => {
    res.json({
        message: 'Welcome to To Do api'
    });
});

toDoRouter.get('/todos', (req, res) => {
    let currentTodos = readTodos();
    const completed = req.query.completed;

    if(completed) {
        currentTodos = currentTodos.filter((task) => {
            return task.completed === completed
        });
    }
    res.send(currentTodos);
});

toDoRouter.get('/todos/:id', (req, res) => {
    const currentTodos = readTodos();
    const taskId = req.params.id;
    const task = currentTodos.find((task) => task.id ===taskId);

    if (task) {
        res.send(task)
    }
    res.status(404).json({
        error: 'Task not found'
    });
});


toDoRouter.post('/todos', (req, res) => {
    const currentTodos = readTodos();

    if (currentTodos.some((todo) => todo.id === req.body.id)) {
        res.status(400).send ({
            error: 'This ID is exist'
        });
    } else {
        const newTodo = {
            id: req.body.id,
            task: req.body.task,
            completed: req.body.completed
        };
        currentTodos.push(newTodo);
        writeTodos(currentTodos);
        res.json(newTodo);
    }
});


toDoRouter.put('/todos/:id', (req, res) => {
    const currentTodos = readTodos();
    const updatedTodos = currentTodos.find((task) => task.id === req.params.id);

    if (updatedTodos) {
        updatedTodos.task = req.body.task;
        updatedTodos.completed = req.body.completed;
    } else {
        res.status(404).json({
            message: 'Task not found'
        });
    }
    writeTodos(currentTodos);
    res.send(updatedTodos)
});


toDoRouter.delete('/todos/:id', (req, res) => {
    const currentTodos = readTodos();
    const updatedTodos = currentTodos.filter((task) => task.id !== req.params.id);

    writeTodos(updatedTodos);

    res.json({
        message: `Todo item ${req.params.id} has been deleted`
    });
});

module.exports = toDoRouter;


const express = require('express');

const { readTodos, writeTodos } = require('./databaseOperation_practice');

const toDoRouter = express.Router();

toDoRouter.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Todo API'
    });
});

toDoRouter.get('/todos', (req, res) => {

    let currentTodos = readTodos();
    const completed = req.query.completed;

    if (completed) {
        currentTodos = currentTodos.filter((task) => {
            return task.completed === completed
        })
    }
    res.send(currentTodos);
});

toDoRouter.get('/todos/:id', (req, res) => {
    
    const currentTodos = readTodos();
    const taskId = req.params.id;
    const task = currentTodos.filter((task) => task.id === taskId);

    if (task) {
        res.send(task)
    }
    res.status(404).json({
        error: 'Task not found'
    });
});

toDoRouter.post('/todos', (req, res) => {
    const currentTodos = readTodos();

    if (currentTodos.some((todo) => todo.id === req.body.id)) {
        res.status(400).json({
            error: 'This ID is exist'
        });
    } else {
        const newTodo = {
            id: req.body.id,
            task: req.body.task,
            completed: req.body.completed
        };

        currentTodos.push(newTodo);

        writeTodos(currentTodos);

        res.json(newTodo);
    }
});

toDoRouter.put('/todos/:id', (req, res) => {

    const currentTodos = readTodos();
    const updatedTodos = currentTodos.find((task) => task.id === req.params.id);

    if (updatedTodos) {
        updatedTodos.task = req.body.task;
        updatedTodos.completed = req.body.completed;
    } else {
        res.status(404).json({
            message: 'Task not found'
        });
    }

    writeTodos(currentTodos);

    res.send(updatedTodos)
});

toDoRouter.delete('/todos/:id', (req, res) => {
    const currentTodos = readTodos();
    const updatedTodos = currentTodos.filter((task) => task.id !== req.params.id);

    writeTodos(updatedTodos);

    res.json({
        message: `To do item ${req.params.id} has been deleted`
    });
});

module.export = toDoRouter;





const express = require('express');
const { readTodos, writeTodos } = require('./databaseOperation_practice');

const todoRouter = express.Router();

toDoRouter.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Todo Api'
    });
});

toDoRouter.get('/todos', (req, res) => {

    let currentTodos = readTodos();
    const completed = req.query.completed
    // const completed = currentTodos.filter((task) => task.completed === req.query.completed);

    if (completed) {
        currentTodos = currentTodos.filter((task) => task.completed === completed);
    }
    res.send(currentTodos);
});

toDoRouter.get('/todos/:id', (req, res) => {

    const currentTodos = readTodos();
    const taskId = req.params.id;
    const task = currentTodos.find((task) => task.id === taskId);

    if (task) {
        res.send(task)
    }
    res.status(404).json({
        error: 'Task not found'
    });
});

todoRouter.post('/todos', (req, res) => {

    const currentTodos = readTodos();

    if (currentTodos.some((todo) => todo.id === req.body.id)) {
        res.status(400).send({
            error: 'This ID is exist'
        });
    } else {
        const newTodo = {
            id: req.body.id,
            task: req.body.task,
            completed: req.body.completed
        };

        currentTodos.push(newTodo);

        writeTodos(currentTodos);

        res.json(newTodo);
    }
});

toDoRouter.put('/todos/:id', (req, res) => {

    const currentTodos = readTodos();
    const updatedTodos = currentTodos.find((todo) => todo.id === req.params.id);

    if (updatedTodos) {
        updatedTodos.task = req.body.task;
        updatedTodos.completed = req.body.completed
    } else {
        res.status(404).json({
            message: 'Task not found'
        });
    }

    writeTodos(currentTodos);

    res.send(updatedTodos)
});

toDoRouter.delete('/todos/:id', (req, res) => {
    const currentTodos = readTodos();
    const updatedTodos = currentTodos.filter((task) => task.id !== req.params.id);

    writeTodos(updatedTodos);

    res.json({
        message: `Todo item ${req.params.id} has been deleted`
    });
});

module.export = todoRouter;


const express = require('express')
const toDoRouter = express.Router();
const { readTodos, writeTodos } = require('./databaseOperation_practice');

toDoRouter.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Todo Api'
    });
});

toDoRouter.get('/todos', (req, res) => {

    const currentTodos = readTodos();
    const completed = req.query.completed;

    if (completed) {
        currentTodos = currentTodos.filter((task) => task.completed === completed)
    }

    res.send(currentTodos);
})

toDoRouter.get('/todos/:id', (req, res) => {

    const currentTodos = readTodos();
    const taskId = req.params.id;
    const task = currentTodos.find((task) => task.id === taskId);

    if (task) {
        res.send(task)
    }
    res.status(404).json({
        error: 'Task not found'
    });
});

toDoRouter.post('/todos', (req, res) => {

    let currentTodos = readTodos();

    if (currentTodos.some((task) => task.id === req.body.id)) {
        res.status(400).send({
            error: 'This ID is exist'
        });
    } else {
        const newTodo = {
            id: req.body.id,
            task: req.body.task,
            completed: req.body.completed
        }
    }

    currentTodos.push(newTodo);

    writeTodos(currentTodos);

    res.json(newTodo);
})


toDoRouter.put('/todos/:id', (req, res) => {

    const currentTodos = readTodos();

    const updatedTodos = currentTodos.find((task) => task.id === req.params.id)

    if (updatedTodos) {
        updatedTodos.completed = req.body.completed;

        updatedTodos.task = req.body.task;
    } else {
        res.status(404).json({
            message: 'Task not found'
        });
    }

    writeTodos(currentTodos);
    res.send(updatedTodos);
})




const express = require('express');
const { readTodos, writeTodos } = require('./databaseOperation_practice');

const todoRouter = express.Router();

todoRouter.get('/', (req, res) => res.json({
    message: 'Welcome to API'
}));

todoRouter.get('/todos', (req, res) => {

    const currentTodos = readTodos();

    const completed = req.query.completed;

    if(completed) {
        currentTodos = currentTodos.filter((todo) => todo.completed === completed)
    }

    res.send(currentTodos)
})

todoRouter.get('/todos/:id', (req, res) => {

    const currentTodos = readTodos();

    const taskId = req.params.id;
    const task = currentTodos.find((task) => task.id === taskId)
    
    if (task) {
        res.send(task)
    }
    res.status(404).json({
        error: 'Task not found'
    });
});


todoRouter.post('/todos', (req, res) => {
    const currentTodos = readTodos();

    const taskId = req.body.id
    const task = req.body.task

    if (currentTodos.some((task) => task.id === taskId)) {

        res.status(400).json({
            error: 'This ID is exist'
        })
    } else {
        const newTodo = {
            id: req.body.id,
            task: req.body.task,
            completed: req.body.completed
        };
        currentTodos.push(newTodo);

        writeTodos(currentTodos);

        res.json(newTodo)
    }
})

todoRouter.put('/todos/:id', (req, res) => {

    const currentTodos = readTodos();
    const updatedTodos = currentTodos.find((task) => task.id === req.params.id)

    if (updatedTodos) {
        updatedTodos.task = req.body.task;
        updatedTodos.completed = req.body.completed;
    } else {
        res.status(404).json({
            message: 'Task not found'
        });
    }

    writeTodos(currentTodos);

    res.send(updatedTodos)
});

todoRouter.delete('/todos/:id', (req, res) => {
    const currentTodos = readTodos();
    const updatedTodos = filter((task) => task.id !== req.params.id);

    writeTodos(updatedTodos);

    res.json({
        message: `To do item ${req.params.id} has been deleted`
    });
});

module.exports = toDoRouter;
