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
  deleteSectionStart,
  deleteSectionSuccess,
  deleteSectionError,
  updateSectionStart,
  updateSectionSuccess,
  updateSectionError,
} from "../taskSectionSlice";
import axios from "axios";

export const addTask = async (dispatch, task, sectionId) => {
  dispatch(addTaskSectionStart());

  try {
    const { data } = await axios.put(
      `/api/taskSections/${sectionId}`,
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

export const deleteTask = async (dispatch, sectionId, taskId) => {
  dispatch(deleteTaskStart());

  try {
    const { data } = await axios.delete(
      `/api/taskSections/${sectionId}/${taskId}`
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

export const deleteSection = async (dispatch, sectionId) => {
  dispatch(deleteSectionStart());

  try {
    const { data } = await axios.delete(`/api/taskSections/${sectionId}`);

    dispatch(deleteSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(deleteSectionError(errorMessage));
  }
};

export const addSection = async (dispatch, name) => {
  dispatch(addSectionStart());

  try {
    const { data } = await axios.post("/api/taskSections", name, {
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

export const updateSection = async (dispatch, sectionId, updatedSection) => {
  dispatch(updateSectionStart());

  try {
    const { data } = await axios.put(`/api/taskSections/${sectionId}`, {
      name: updatedSection,
    });

    dispatch(updateSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(updateSectionError(errorMessage));
  }
};
