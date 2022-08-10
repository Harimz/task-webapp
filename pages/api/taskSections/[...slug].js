import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";
import TaskSection from "../../../models/taskSectionModel";
import { updateTask } from "../../../redux/api/taskCalls";

export default Wrapper({
  DELETE: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const sectionId = req.query.slug[0];
    const taskId = req.query.slug[1];

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const taskSection = await TaskSection.findById(sectionId);

    if (!taskSection.user === user._id.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    const updatedTasks = taskSection.tasks.filter(
      (task) => task._id.toString() !== taskId
    );

    taskSection.tasks = updatedTasks;

    await taskSection.save();

    const taskSections = await TaskSection.find({ user: user._id });

    return taskSections;
  },
  PUT: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const sectionId = req.query.slug[0];
    const taskId = req.query.slug[1];

    const updates = Object.keys(req.body);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const taskSection = await TaskSection.findById(sectionId);

    if (!taskSection.user === user._id.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    const section = await TaskSection.findById(sectionId);

    const task = section.tasks.filter(
      (task) => task._id.toString() === taskId
    )[0];

    updates.forEach((update) => (task[update] = req.body[update]));

    await section.save();

    const taskSections = await TaskSection.find({ user: user._id });

    return taskSections;
  },
});
