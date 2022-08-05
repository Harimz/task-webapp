import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import User from "../../../models/userModel";
import InboxTask from "../../../models/inboxTaskModel";

export default Wrapper({
  DELETE: async (req, res) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    const { taskId } = req.query;

    if (!session) {
      throw new Exception("Not authorized.", 401);
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });

    const inbox = await InboxTask.findOne({ user: user._id });

    const updatedTasks = inbox.tasks.filter(
      (task) => task._id.toString() !== taskId
    );

    inbox.tasks = updatedTasks;

    await inbox.save();

    return inbox;
  },
});
