import {
  addTaskSectionStart,
  addTaskSectionSuccess,
  addTaskSectionError,
} from "../taskSectionSlice";
import axios from "axios";

export const addTask = async (dispatch, task) => {
  dispatch(addTaskSectionStart());

  try {
    const { data } = axios.post("/api/taskSections", task, {
      "Content-Type": "application/json",
    });

    // dispatch(addTaskSectionSuccess(data))
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addTaskSectionError(errorMessage));
  }
};
