import axios from "axios";
import {
  addInboxTaskError,
  addInboxTaskStart,
  addInboxTaskSuccess,
  deleteInboxTaskError,
  deleteInboxTaskStart,
  deleteInboxTaskSuccess,
  getInboxTasksError,
  getInboxTasksStart,
  getInboxTasksSuccess,
} from "../inboxSlice";

export const addInboxTask = async (dispatch, task) => {
  dispatch(addInboxTaskStart());
  try {
    const { data } = await axios.post("/api/inboxTasks", task, {
      "Content-Type": "application/json",
    });

    dispatch(addInboxTaskSuccess(data.tasks));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addInboxTaskError(errorMessage));
  }
};

export const getInboxTasks = async (dispatch) => {
  dispatch(getInboxTasksStart());

  try {
    const { data } = await axios.get("/api/inboxTasks");

    dispatch(getInboxTasksSuccess(data.tasks));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(getInboxTasksError(errorMessage));
  }
};

export const deleteInboxTask = async (dispatch, taskId) => {
  dispatch(deleteInboxTaskStart());

  try {
    const { data } = await axios.delete(`/api/inboxTasks/${taskId}`);

    dispatch(deleteInboxTaskSuccess(data.tasks));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(deleteInboxTaskError(errorMessage));
  }
};
