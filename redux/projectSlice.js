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
    getProjectsStart: (state) => {
      state.pending = true;
    },
    getProjectsSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    getProjectsError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    updateProjectStart: (state, action) => {
      state.pending = true;
    },
    updateProjectSuccess: (state, action) => {
      state.pending = false;
      // state.projects = action.payload;
    },
    updateProjectError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  addProjectStart,
  addProjectSuccess,
  addProjectError,
  getProjectsStart,
  getProjectsSuccess,
  getProjectsError,
  updateProjectStart,
  updateProjectSuccess,
  updateProjectError,
} = projectSlice.actions;

export default projectSlice.reducer;
