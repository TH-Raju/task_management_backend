const Task = require("../models/task");

const createTask = async function (data) {
  const result = Task.create(data);
  return result;
};

const getAllTask = async function () {
  const result = Task.find({});
  return result;
};

const deleteTask = async function (id) {
  const result = Task.deleteOne({ _id: id });
  return result;
};



const taskService = {
  createTask,
  getAllTask,
  deleteTask,
};

module.exports = taskService;
