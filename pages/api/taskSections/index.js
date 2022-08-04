import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";
import TaskSection from "../../../models/taskSectionModel";

export default Wrapper({
  POST: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const task = req.body;

    const user = await User.findOne({ email: session.user.email });

    const existingSection = await TaskSection.findOne({
      user: user._id,
      belongsTo: task.belongsTo,
    });

    if (!existingSection) {
      if (task.title) {
        await TaskSection.create({
          user: user._id,
          tasks: [task],
          belongsTo: task.belongsTo,
        });
      } else {
        await TaskSection.create({
          user: user._id,
          belongsTo: task.belongsTo,
        });
      }
    } else {
      const updatedTasks = [...existingSection.tasks, task];

      existingSection.tasks = updatedTasks;

      await existingSection.save();
    }

    const taskSections = await TaskSection.find({ user: user._id });

    return taskSections;
  },
  GET: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const taskSections = await TaskSection.find({ user: user._id });

    return taskSections;
  },
});
