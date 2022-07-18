import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state) => {},
  },
});

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;
