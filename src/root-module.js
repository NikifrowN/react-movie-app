import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { comingSoonSlice } from "./features/coming-soon/module";
import { popularSlice } from "./features/popular-movies/module";
import { top250MoviesSlice } from "./features/top250-movies/module";
import { top250ShowsSlice } from "./features/top250-shows/module";
import { searchedSlice } from "./features/searched/module";
import { movieSlice } from "./features/movie-card/module";

const rootReducer = combineReducers({
   comingSoon: comingSoonSlice.reducer,
   popular: popularSlice.reducer,
   top250movies: top250MoviesSlice.reducer,
   top250shows: top250ShowsSlice.reducer,
   searched: searchedSlice.reducer,
   movie: movieSlice.reducer,
   
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   devTools: true,
});
