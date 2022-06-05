import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { comingSoonSlice } from "./features/coming-soon/module";
import { popularSlice } from "./features/popular-movies/module";
import { top250MoviesSlice } from "./features/top250-movies/module";
import { top250ShowsSlice } from "./features/top250-shows/module";
import { searchedSlice } from "./features/searched/module";
import { movieSlice } from "./features/movie-card/module";
import { personSlice } from "./features/person-card/module";
import { watchlistSlice } from "./features/watchlist/module";
import { 
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
};

const rootReducer = combineReducers({
   comingSoon: comingSoonSlice.reducer,
   popular: popularSlice.reducer,
   top250movies: top250MoviesSlice.reducer,
   top250shows: top250ShowsSlice.reducer,
   searched: searchedSlice.reducer,
   movie: movieSlice.reducer,
   person: personSlice.reducer,
   watchlist: watchlistSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
   devTools: true,
});

export const persistor = persistStore(store);