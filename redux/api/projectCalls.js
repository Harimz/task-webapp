import axios from "axios";
import {
  addProjectStart,
  addProjectSuccess,
  addProjectError,
} from "../projectSlice";

export const addProject = async (dispatch, projectDetails) => {
  dispatch(addProjectStart());

  try {
    const { data } = await axios.post("/api/projects", projectDetails, {
      "Content-Type": "application/json",
    });

    dispatch(addProjectSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addProjectError(errorMessage));
  }
};
