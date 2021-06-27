const express = require("express");
const { readTodos, writeTodos } = require("./databaseOperations");

const toDoRouter = express.Router();

toDoRouter.get("/", (req, res) => {
  res.json({
    message: "Welcome to TO DO api",
  });
});

toDoRouter.get("/todos", (req, res) => {
  let currentTodos = readTodos();
  // let currentUsers = readUsers();
  const completed = req.query.completed;

  if (completed) {
    currentTodos = currentTodos.filter((task) => task.completed === completed);
  }

  res.send(currentTodos);
});

toDoRouter.get("/todos/:id", (req, res) => {
  const currentTodos = readTodos();
  const taskId = req.params.id;
  const task = currentTodos.find((task) => task.id === taskId);

  if (task) {
    res.send(task);
  }
  res.status(404).json({
    error: "Task not found",
  });
});

toDoRouter.post("/todos", (req, res) => {
  const currentTodos = readTodos();

  if (currentTodos.some((todo) => todo.id === req.body.id)) {
    res.status(400).send({
      error: "This ID is exist",
    });
  } else {
    const newTodo = {
      id: req.body.id,
      task: req.body.task,
      completed: req.body.completed,
    };

    currentTodos.push(newTodo);

    writeTodos(currentTodos);

    res.json(newTodo);
  }
});

toDoRouter.put("/todos/:id", (req, res) => {
  const currentTodos = readTodos();
  const updatedTodos = currentTodos.find((task) => task.id === req.params.id);

  if (updatedTodos) {
    updatedTodos.task = req.body.task;
    updatedTodos.completed = req.body.completed;
  } else {
    res.status(404).json({
      message: "Task not found",
    });
  }

  writeTodos(currentTodos);

  res.send(updatedTodos);
});

toDoRouter.delete("/todos/:id", (req, res) => {
  const currentTodos = readTodos();
  const updatedTodos = currentTodos.filter((task) => task.id !== req.params.id);

  writeTodos(updatedTodos);

  res.json({
    message: `To do item ${req.params.id} has been deleted`,
  });
});

module.exports = toDoRouter;
