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

async function deleteTask(req, res) {
  let id = req.params.id;
  let taskDelete = await taskService.deleteTask(id);

  let data = {
    success: true,
    status: 200,
    data: taskDelete,
  };

  res.send(data);
}

async function updateTask(req, res) {
  let datas = req.body;
  let id = req.params.id;
  // console.log(id);
  let taskUpdate = await taskService.updateTask(id, datas);
  console.log(" data ", taskUpdate);
  let data = {
    success: true,
    status: 200,
    data: taskUpdate,
  };

  res.send(data);
}

const taskController = {
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
};

module.exports = taskController;
