let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let taskSchema = new Schema(
  {
    userId: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

let Task = mongoose.model("task", taskSchema);
module.exports = Task;
