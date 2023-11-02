const taskService = require("../service/taskService");

async function createTask(req, res) {
  try {
    const addTask = await taskService.createTask(req.body);
    let data = {
      success: true,
      status: 200,
      data: addTask,
    };

    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

async function getAllTask(req, res) {
  const allTask = await taskService.getAllTask();
  let data = {
    success: true,
    status: 200,
    data: allTask,
  };

  res.send(data);
}

const taskController = {
  createTask,
  getAllTask,
};

module.exports = taskController;
