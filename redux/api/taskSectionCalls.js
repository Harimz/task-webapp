import {
  addTaskSectionStart,
  addTaskSectionSuccess,
  addTaskSectionError,
  getTaskSectionsStart,
  getTaskSectionsSuccess,
  getTaskSectionsError,
} from "../taskSectionSlice";
import axios from "axios";

export const addTask = async (dispatch, task) => {
  dispatch(addTaskSectionStart());

  try {
    const { data } = await axios.post("/api/taskSections", task, {
      "Content-Type": "application/json",
    });

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
