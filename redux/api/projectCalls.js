import axios from "axios";
import {
  addProjectStart,
  addProjectSuccess,
  addProjectError,
  getProjectsStart,
  getProjectsSuccess,
  getProjectsError,
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

export const getProjects = async (dispatch) => {
  dispatch(getProjectsStart());

  try {
    const { data } = await axios.get("/api/projects");

    dispatch(getProjectsSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(getProjectsError(errorMessage));
  }
};

export const updateProject = async (dispatch, updateDetails) => {};
