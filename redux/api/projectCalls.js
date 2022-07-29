import axios from "axios";
import {
  addProjectStart,
  addProjectSuccess,
  addProjectError,
  getProjectsStart,
  getProjectsSuccess,
  getProjectsError,
  updateProjectStart,
  updateProjectError,
  updateProjectSuccess,
  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectError,
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

export const updateProject = async (dispatch, id, updateDetails) => {
  dispatch(updateProjectStart());

  try {
    const { data } = await axios.put(`/api/projects/${id}`, updateDetails, {
      "Content-Type": "application/json",
    });

    dispatch(updateProjectSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(updateProjectError(errorMessage));
  }
};

export const deleteProject = async (dispatch, projectId) => {
  dispatch(deleteProjectStart());

  try {
    const { data } = await axios.delete(`/api/projects/${projectId}`);

    dispatch(deleteProjectSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(deleteProjectError(errorMessage));
  }
};
