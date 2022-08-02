import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import Project from "../../../models/projectModel";
import User from "../../../models/userModel";

export default Wrapper({
  POST: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const { color, name, isFavorite } = req.body;

    const user = await User.findOne({ email: session.user.email });

    const projectExists = await Project.findOne({ name });

    if (projectExists) {
      throw new Exception("Project name is already in use.", 409);
    }

    const newProject = await Project.create({
      name,
      color,
      isFavorite,
      user: user._id,
    });

    const projects = await Project.find({});

    return projects;
  },
  GET: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const userProjects = await Project.find({ user: user._id });

    return userProjects;
  },
});
