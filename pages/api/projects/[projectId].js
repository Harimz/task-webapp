import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";

export default Wrapper({
  PUT: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const {
      query: { projectId },
    } = req;

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const project = await Project.findById(projectId);

    if (user._id.toString() !== project.user.toString()) {
      throw new Exception("Not authorized.", 401);
    }

    const updateDetails = req.body;
    const updates = Object.keys(req.body);

    const allowedUpdates = [
      "name",
      "members",
      "comments",
      "sections",
      "isFavorite",
      "sectionName",
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      throw new Exception("Invalid updates.", 400);
    }

    if (updates.includes("sectionName")) {
      let existingSections = project.sections;

      existingSections.push({ name: updateDetails.sectionName });

      project.sections = existingSections;

      await project.save();

      const projects = await Project.find({ user: user._id });
      return projects;
    }
  },
});
