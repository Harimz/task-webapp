import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/db-connect";
import User from "../../../models/userModel";

export default Wrapper({
  POST: async (req) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Exception("Valid inputs required", 422);
    }

    await dbConnect();

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Exception("User already exists", 409);
    }

    const user = await User.create({ email, password });

    return { data: user };
  },
});
