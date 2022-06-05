import { createSlice } from "@reduxjs/toolkit";

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addMovie: (state, { payload }) => {
      if(state.find(movie => movie.id === payload.id)) {
        return;
      }
      state.push(payload);
    },
    removeMovie: (state, { payload }) => {
      if(state.find(movie => movie.id === payload.id)){
        const index = state.map(function(e) { return e.id; }).indexOf(payload.id);
        state.splice(index, 1);
      }
    },
    clearWatchlist: () => watchlistSlice.getInitialState(),
  },
});
