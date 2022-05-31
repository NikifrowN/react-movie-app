import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    entity: {},
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    clear: () => movieSlice.getInitialState(),
    finishLoading: (state, { payload }) => {
      state.isLoading = false;

      state.entity = { payload };
    },
  },
});
