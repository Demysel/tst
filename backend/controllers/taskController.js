const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { item, quantity, userId } = req.body;
  const newTask = new Task({ item, quantity, userId });
  await newTask.save();
  res.status(201).send('Task created');
};

exports.getTasks = async (req, res) => {
  const { userId } = req.query;
  const tasks = await Task.find({ userId });
  res.status(200).json(tasks);
};

