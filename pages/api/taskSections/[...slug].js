import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";
import TaskSection from "../../../models/taskSectionModel";

export default Wrapper({
  DELETE: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const belongsTo = req.query.slug[0];
    const taskId = req.query.slug[1];

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const taskSection = await TaskSection.findOne({ belongsTo });

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
});
