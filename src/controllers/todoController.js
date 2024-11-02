const Todo = require('../models/Todo');

exports.getAllTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json({ data: todos });
};

exports.getTodoById = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.json({ data: todo });
};

exports.createTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json({ data: newTodo });
};

exports.updateTodo = async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ data: updatedTodo });
};

exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ data: "Item deleted" });
};