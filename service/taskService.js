const Task = require("../models/task");

const createTask = async function (data) {
  const result = Task.create(data);
  return result;
};

const taskService = {
  createTask,
};

module.exports = taskService;
