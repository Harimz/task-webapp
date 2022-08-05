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
  belongsTo: {
    type: String,
  },
  labels: [labelSchema],
});

const inboxTaskSchema = new mongoose.Schema({
  tasks: {
    type: [taskSchema],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default mongoose.models.InboxTask ||
  mongoose.model("InboxTask", inboxTaskSchema);
