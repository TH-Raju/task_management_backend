const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

router.post("/create", taskController.createTask);
router.get("/", taskController.getAllTask);
router.delete("/:id", taskController.deleteTask);
router.patch("/update/:id", taskController.updateTask);

module.exports = router;
