import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";
import InboxTask from "../../../models/inboxTaskModel";

export default Wrapper({
  POST: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const task = req.body;

    const user = await User.findOne({ email: session.user.email });

    const inbox = await InboxTask.findOne({ user: user._id });

    if (!inbox) {
      const newInbox = await InboxTask.create({ user: user._id });

      newInbox.tasks = [task];

      await newInbox.save();
    } else {
      const existingTasks = inbox.tasks;

      inbox.tasks = [...existingTasks, task];

      await inbox.save();
    }

    return inbox;
  },
  GET: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const inbox = await InboxTask.findOne({ user: user._id });

    return inbox;
  },
});
