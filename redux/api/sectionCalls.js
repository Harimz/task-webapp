import axios from "axios";
import {
  addSectionTaskError,
  addSectionTaskStart,
  addSectionTaskSuccess,
  removeSectionError,
  removeSectionStart,
  removeSectionSuccess,
} from "../sectionSlice";

export const removeSection = async (dispatch, sectionId) => {
  dispatch(removeSectionStart());

  try {
    const { data } = await axios.delete(
      `/api/sections/${sectionId}`,
      sectionId
    );

    dispatch(removeSectionSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(removeSectionError(errorMessage));
  }
};

export const addSectionTask = async (dispatch, sectionId, task) => {
  dispatch(addSectionTaskStart());

  try {
    const { data } = await axios.post(`/api/sections/${sectionId}`, task, {
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
