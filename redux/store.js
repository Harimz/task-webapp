import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projectSlice";
import taskSectionsReducer from "./taskSectionSlice";
import inboxReducer from "./inboxSlice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    taskSections: taskSectionsReducer,
    inboxTasks: inboxReducer,
  },
});
