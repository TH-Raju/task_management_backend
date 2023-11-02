const express = require("express");
const app = express();
const json = require("express").json;
const cors = require("cors");
const userRouter = require("./route/user.route");
const taskRouter = require("./route/task.route");

app.use(json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.get("*", (req, res) => {
  res.status("No Route Found");
});

module.exports = app;
