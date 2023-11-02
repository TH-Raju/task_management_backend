const Task = require("../models/task");

const createTask = async function (data) {
  const result = Task.create(data);
  return result;
};

const getAllTask = async function () {
  const result = Task.find({});
  return result;
};



const taskService = {
  createTask,
  getAllTask,
};

module.exports = taskService;
