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

const taskController = {
  createTask,
};

module.exports = taskController;
