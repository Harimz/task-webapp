import axios from "axios";
import { signIn } from "next-auth/react";

const useAuth = () => {
  const registerUser = async (credentials) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(
        "/api/auth/register",
        credentials,
        config
      );

      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (!result.error) {
        return { status: "success", data };
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      return { status: "error", message: errorMessage };
    }
  };

  const loginUser = async (credentials) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (!result.error) {
        return { status: "success" };
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      return { status: "error", message: errorMessage };
    }
  };

  return { registerUser, loginUser };
};

export default useAuth;
