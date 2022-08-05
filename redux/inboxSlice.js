import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pending: false,
  inboxTasks: [],
  error: "",
};

export const inboxSlice = createSlice({
  name: "inboxTasks",
  initialState,
  reducers: {
    addInboxTaskStart: (state, action) => {
      state.pending = true;
    },
    addInboxTaskSuccess: (state, action) => {
      state.pending = false;
      state.inboxTasks = action.payload;
    },
    addInboxTaskError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    getInboxTasksStart: (state, action) => {
      state.pending = true;
    },
    getInboxTasksSuccess: (state, action) => {
      state.pending = false;
      state.inboxTasks = action.payload;
    },
    getInboxTasksError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
    deleteInboxTaskStart: (state, action) => {
      state.pending = true;
    },
    deleteInboxTaskSuccess: (state, action) => {
      state.pending = false;
      state.inboxTasks = action.payload;
    },
    deleteInboxTaskError: (state, action) => {
      state.pending = false;
      state.error = action.payload;
    },
  },
});

export const {
  addInboxTaskStart,
  addInboxTaskSuccess,
  addInboxTaskError,
  getInboxTasksStart,
  getInboxTasksSuccess,
  getInboxTasksError,
  deleteInboxTaskStart,
  deleteInboxTaskSuccess,
  deleteInboxTaskError,
} = inboxSlice.actions;

export default inboxSlice.reducer;
