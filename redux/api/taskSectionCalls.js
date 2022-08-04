import {
  addTaskSectionStart,
  addTaskSectionSuccess,
  addTaskSectionError,
  getTaskSectionsStart,
  getTaskSectionsSuccess,
  getTaskSectionsError,
  deleteTaskStart,
  deleteTaskError,
  deleteTaskSuccess,
  addSectionStart,
  addSectionError,
  addSectionSuccess,
} from "../taskSectionSlice";
import axios from "axios";

export const addTask = async (dispatch, task) => {
  dispatch(addTaskSectionStart());

  try {
    const { data } = await axios.post(
      "/api/taskSections",
      { task: task },
      {
        "Content-Type": "application/json",
      }
    );

    dispatch(addTaskSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addTaskSectionError(errorMessage));
  }
};

export const getTaskSections = async (dispatch) => {
  dispatch(getTaskSectionsStart());

  try {
    const { data } = await axios.get("/api/taskSections");

    dispatch(getTaskSectionsSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(getTaskSectionsError(errorMessage));
  }
};

export const deleteTask = async (dispatch, belongsTo, taskId) => {
  dispatch(deleteTaskStart());

  try {
    const { data } = await axios.delete(
      `/api/taskSections/${belongsTo}/${taskId}`
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

export const addSection = async (dispatch, belongsTo) => {
  dispatch(addSectionStart());

  try {
    const { data } = await axios.post("/api/taskSections", belongsTo, {
      "Content-Type": "application/json",
    });

    dispatch(addSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addSectionError(errorMessage));
  }
};
