import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import Project from "../../../models/projectModel";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";

export default Wrapper({
  DELETE: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const {
      query: { sectionId },
    } = req;

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const project = await Project.findById(projectId);
  },
  POST: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const {
      query: { sectionId },
    } = req;

    await dbConnect();

    const project = await Project.findById();
  },
});
