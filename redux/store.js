import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectSlice";
import taskSectionsReducer from "./taskSectionSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    taskSections: taskSectionsReducer,
  },
});
