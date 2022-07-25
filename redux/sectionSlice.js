import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const sectionSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    removeSectionStart: (state, action) => {
      state.pending = true;
    },
    removeSectionSuccess: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
    },
    removeSectionError: (state, action) => {
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
  },
});

export const {
  removeSectionStart,
  removeSectionSuccess,
  removeSectionError,
  addSectionTaskError,
  addSectionTaskStart,
  addSectionTaskSuccess,
} = sectionSlice.actions;

export default sectionSlice.reducer;
