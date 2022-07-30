import axios from "axios";
import {
  addSectionTaskError,
  addSectionTaskStart,
  addSectionTaskSuccess,
  deleteSectionError,
  deleteSectionStart,
  deleteSectionSuccess,
  updateSectionError,
  updateSectionStart,
  updateSectionSuccess,
} from "../projectSlice";

export const deleteSection = async (dispatch, projectId, sectionId) => {
  dispatch(deleteSectionStart());

  try {
    const { data } = await axios.delete(
      `/api/projects/${projectId}/${sectionId}`
    );

    dispatch(deleteSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(deleteSectionError(errorMessage));
  }
};

export const addSectionTask = async (dispatch, projectId, task) => {
  dispatch(addSectionTaskStart());

  try {
    const { data } = await axios.put(`/api/projects/${projectId}`, task, {
      "Content-Type": "application/json",
    });

    dispatch(addSectionTaskSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addSectionTaskError(errorMessage));
  }
};

export const updateSection = async (
  dispatch,
  projectId,
  sectionId,
  updatedSection
) => {
  dispatch(updateSectionStart());

  try {
    const { data } = await axios.put(
      `/api/projects/${projectId}/${sectionId}`,
      updatedSection,
      { "Content-Type": "application/json" }
    );

    dispatch(updateSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(updateSectionError(errorMessage));
  }
};
