import { createSlice } from "@reduxjs/toolkit";

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addMovie: (state, { payload }) => {
      if(JSON.stringify(state).includes(JSON.stringify(payload))) {
        return;
      }
      state.push(payload);
    },
    removeMovie: (state, { payload }) => {
      if(JSON.stringify(state).includes(JSON.stringify(payload))) {
        const index = state.findIndex(i => i == payload);
        state.splice(index, 1);
      }
    },
    clearWatchlist: () => watchlistSlice.getInitialState(),
  },
});
