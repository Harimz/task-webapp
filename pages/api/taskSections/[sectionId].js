import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";
import TaskSection from "../../../models/taskSectionModel";

export default Wrapper({
  PUT: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { sectionId } = req.query;
    const updateDetails = req.body;

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const section = await TaskSection.findById(sectionId);

    if (section.user.toString() !== user._id.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    if (updateDetails.task) {
      const updatedTasks = [...section.tasks, updateDetails.task];

      section.tasks = updatedTasks;

      await section.save();
    }

    if (updateDetails.name) {
      const sectionExists = await TaskSection.findOne({
        name: updateDetails.name,
      });

      if (sectionExists) {
        throw new Exception("Section name already in use", 409);
      }

      await TaskSection.findByIdAndUpdate(sectionId, {
        name: updateDetails.name,
      });
    }

    const taskSections = await TaskSection.find({ user: user._id });

    return taskSections;
  },
  DELETE: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { sectionId } = req.query;

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const taskSection = await TaskSection.findById(sectionId);

    if (!taskSection.user === user._id.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    await TaskSection.findByIdAndDelete(sectionId);

    const taskSections = await TaskSection.find({ user: user._id });

    return taskSections;
  },
});
