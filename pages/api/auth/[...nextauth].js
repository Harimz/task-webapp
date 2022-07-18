import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { clientPromise } from "../../../lib";
import User from "../../../models/userModel";
import { dbConnect } from "../../../lib";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found.");
        }

        if (await user.comparePasswords(credentials.password)) {
          return user;
        } else {
          throw new Error("Invalid email or password.");
        }
      },
    }),
  ],

  secret: "secret",
};

export default NextAuth(authOptions);
