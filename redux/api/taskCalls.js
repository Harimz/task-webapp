import axios from "axios";
import {
  deleteTaskError,
  deleteTaskStart,
  deleteTaskSuccess,
  updateTaskStart,
  updateTaskSuccess,
  updateTaskError,
} from "../projectSlice";

export const deleteTask = async (dispatch, projectId, sectionId, taskId) => {
  dispatch(deleteTaskStart());

  try {
    const { data } = await axios.delete(
      `/api/projects/${projectId}/${sectionId}/${taskId}`
    );

    dispatch(deleteTaskSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(deleteTaskError(errorMessage));
  }
};

export const updateTask = async (
  dispatch,
  projectId,
  sectionId,
  taskId,
  updatedTask
) => {
  dispatch(updateTaskStart());

  try {
    const { data } = await axios.put(
      `/api/projects/${projectId}/${sectionId}/${taskId}`,
      updatedTask,
      { "Content-Type": "application/json" }
    );

    dispatch(updateTaskSuccess(data));
    console.log(data);
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(updateTaskError(errorMessage));
  }
};
