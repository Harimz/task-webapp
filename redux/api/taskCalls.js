import axios from "axios";
import {
  deleteTaskError,
  deleteTaskStart,
  deleteTaskSuccess,
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
