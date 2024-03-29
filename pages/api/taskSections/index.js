import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
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

    const sectionName = req.body;

    const user = await User.findOne({ email: session.user.email });

    const existingSection = await TaskSection.findOne({
      name: sectionName.name,
    });

    if (existingSection) {
      throw new Exception("Section name already in use", 409);
    }

    await TaskSection.create({ name: sectionName.name, user: user._id });

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
