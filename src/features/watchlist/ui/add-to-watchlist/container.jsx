import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { watchlistSlice } from "../../module";
import { selectWatchilstMovie, selectWatchlistModuleState } from "../../module/selectors";
import { AddToWatchlist } from "./component";

export const AddToWatchilstContainer = ({movie, size}) => {
   const dispatch = useDispatch();
   const isAdded = useSelector(state => selectWatchilstMovie(state, movie));
   const watchlist = useSelector(selectWatchlistModuleState);

   const addMovie = useCallback(() => {
      dispatch(watchlistSlice.actions.addMovie(movie))
   }, [movie]);
   const removeMovie = useCallback(() => {
      dispatch(watchlistSlice.actions.removeMovie(movie))
   }, [movie]);
   console.log(watchlist)
   return(
      <AddToWatchlist 
         size={size} 
         movie={movie}
         isAdded={isAdded} 
         addMovie={addMovie} 
         removeMovie={removeMovie} 
      />
   )
}