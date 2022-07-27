import { addLabelError, addLabelStart, addLabelSuccess } from "../projectSlice";

export const addLabel = async (dispatch, sectionId) => {
  dispatch(addLabelStart());

  try {
    const { data } = await axios.delete(
      `/api/sections/${sectionId}`,
      sectionId
    );

    dispatch(addLabelSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(addLabelError(errorMessage));
  }
};
