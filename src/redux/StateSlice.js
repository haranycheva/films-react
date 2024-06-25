import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "appState",
  initialState: { isLoading: false, error: null },
  reducers: {
    loading(state) {
      state.isLoading = !state.isLoading;
    },
    makeError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { loading, makeError } = stateSlice.actions;


export const rootReducer = stateSlice.reducer;
