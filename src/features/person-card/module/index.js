import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    entity: {},
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    clear: () => personSlice.getInitialState(),
    finishLoading: (state, { payload }) => {
      state.isLoading = false;

      state.entity = { payload };
    },
  },
});
