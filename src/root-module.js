import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { comingSoonSlice } from "./features/coming-soon/module";
import { popularSlice } from "./features/popular-movies/module";
import { top250MoviesSlice } from "./features/top250-movies/module";

const rootReducer = combineReducers({
   comingSoon: comingSoonSlice.reducer,
   popular: popularSlice.reducer,
   top250movies: top250MoviesSlice.reducer,
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   devTools: true,
});
