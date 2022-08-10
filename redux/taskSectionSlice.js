import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskSections: [],
  pending: false,
  error: "",
};

export const taskSectionsSlice = createSlice({
  name: "taskSections",
  initialState,
  reducers: {
    addTaskSectionStart: (state, action) => {
      state.pending = true;
    },
    addTaskSectionSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    addTaskSectionError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    getTaskSectionsStart: (state, action) => {
      state.pending = true;
    },
    getTaskSectionsSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    getTaskSectionsError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    deleteTaskStart: (state, action) => {
      state.pending = true;
    },
    deleteTaskSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    deleteTaskError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    addSectionStart: (state, action) => {
      state.pending = true;
    },
    addSectionSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    addSectionError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    deleteSectionStart: (state, action) => {
      state.pending = true;
    },
    deleteSectionSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    deleteSectionError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    updateSectionStart: (state, action) => {
      state.pending = true;
    },
    updateSectionSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    updateSectionError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    updateSectionTaskStart: (state, action) => {
      state.pending = true;
    },
    updateSectionTaskSuccess: (state, action) => {
      state.pending = false;
      state.taskSections = action.payload;
    },
    updateSectionTaskError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTaskSectionStart,
  addTaskSectionSuccess,
  addTaskSectionError,
  getTaskSectionsStart,
  getTaskSectionsSuccess,
  getTaskSectionsError,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskError,
  addSectionStart,
  addSectionSuccess,
  addSectionError,
  deleteSectionStart,
  deleteSectionSuccess,
  deleteSectionError,
  updateSectionStart,
  updateSectionSuccess,
  updateSectionError,
  updateSectionTaskStart,
  updateSectionTaskSuccess,
  updateSectionTaskError,
} = taskSectionsSlice.actions;

export default taskSectionsSlice.reducer;
