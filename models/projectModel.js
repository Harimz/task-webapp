import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  email: {
    type: String,
  },
});

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  user: {
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
  section: {
    type: String,
    default: "inbox",
  },
});

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: [taskSchema],
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    members: [memberSchema],
    comments: [commentSchema],
    sections: [sectionSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
