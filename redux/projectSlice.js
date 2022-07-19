import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  pending: false,
  error: "",
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProjectStart: (state) => {
      state.pending = true;
    },
    addProjectSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    addProjectError: (state, action) => {
      state.error = action.payload;
      state.pending = false;
    },
  },
});

export const { addProjectStart, addProjectSuccess, addProjectError } =
  projectSlice.actions;

export default projectSlice.reducer;
