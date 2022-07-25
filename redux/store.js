import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectSlice";
import sectionReducer from "./sectionSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    section: sectionReducer,
  },
});
