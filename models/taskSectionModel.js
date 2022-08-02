import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  taskDate: {
    type: String,
  },
  labels: [labelSchema],
});

const taskSectionSchema = new mongoose.Schema({
  belongTo: {
    type: String,
    required: true,
    default: "inbox",
  },
  tasks: {
    type: [taskSchema],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default mongoose.models.TaskSection ||
  mongoose.model("TaskSection", taskSectionSchema);
