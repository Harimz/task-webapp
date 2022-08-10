import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";

export default Wrapper({
  DELETE: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { query } = req;
    const projectId = query.slug[0];
    const sectionId = query.slug[1];
    const taskId = query.slug[2];

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const project = await Project.findById(projectId);

    if (user._id.toString() !== project.user.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    if (projectId && sectionId && taskId) {
      const section = project.sections.filter(
        (section) => section._id.toString() === sectionId
      )[0];

      const updatess = section.tasks.filter(
        (task) => task._id.toString() !== taskId
      );

      project.sections.filter(
        (section) => section._id.toString() === sectionId
      )[0].tasks = updatess;

      await project.save();

      const projects = await Project.find({ user: user._id });
      return projects;
    }

    if (projectId && sectionId) {
      const updatedSections = project.sections.filter(
        (section) => section._id.toString() !== sectionId
      );

      project.sections = updatedSections;

      await project.save();

      const projects = await Project.find({ user: user._id });
      return projects;
    }
  },
  PUT: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { query } = req;
    const projectId = query.slug[0];
    const sectionId = query.slug[1];
    const taskId = query.slug[2];
    const updates = Object.keys(req.body);

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const project = await Project.findById(projectId);

    if (user._id.toString() !== project.user.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    if (projectId && sectionId && taskId) {
      const sectionTask = project.sections
        .filter((section) => section._id.toString() === sectionId)[0]
        .tasks.filter((task) => task._id.toString() === taskId)[0];

      updates.forEach((update) => (sectionTask[update] = req.body[update]));

      await project.save();

      const projects = await Project.find({ user: user._id });
      return projects;
    }

    if (projectId && sectionId) {
      project.sections.filter(
        (section) => section._id.toString() === sectionId
      )[0].name = req.body["name"];

      await project.save();

      const projects = await Project.find({ user: user._id });
      return projects;
    }
  },
});
