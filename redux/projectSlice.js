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
      state.projects = action.payload;
    },
    updateProjectError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    deleteSectionStart: (state, action) => {
      state.pending = true;
    },
    deleteSectionSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    deleteSectionError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    addSectionTaskStart: (state) => {
      state.pending = true;
    },
    addSectionTaskSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    addSectionTaskError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    addLabelStart: (state) => {
      state.pending = true;
    },
    addLabelSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    addLabelError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    deleteTaskStart: (state) => {
      state.pending = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    deleteTaskError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    clearProjects: (state) => {
      state.projects = [];
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
  deleteSectionStart,
  deleteSectionSuccess,
  deleteSectionError,
  addSectionTaskStart,
  addSectionTaskSuccess,
  addSectionTaskError,
  clearProjects,
  addLabelStart,
  addLabelSuccess,
  addLabelError,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskError,
} = projectSlice.actions;

export default projectSlice.reducer;
