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
  },
});

export const {
  addTaskSectionStart,
  addTaskSectionSuccess,
  addTaskSectionError,
  getTaskSectionsStart,
  getTaskSectionsSuccess,
  getTaskSectionsError,
} = taskSectionsSlice.actions;

export default taskSectionsSlice.reducer;
