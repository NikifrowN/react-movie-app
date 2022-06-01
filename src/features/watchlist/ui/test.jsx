import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { watchlistSlice } from "../module";
import { selectWatchlistModuleState } from "../module/selectors";
import { TectComp } from "./testComp";

export const TestComp = ({movie}) => {
   

   const dispatch = useDispatch();

   // // const addCat = useCallback(() => {
   // //    dispatch(favoritesSlice.actions.addFavorite(id))
   // // }, [id]);
   // // const removeCat = useCallback(() => {
   // //    dispatch(favoritesSlice.actions.removeFavorite(id))
   // // }, [id]);
   // // const clear = useCallback(() => {
   // //    dispatch(favoritesSlice.actions.clearFavorites())
   // }, [id])

   const addMovie = useCallback(() => {
      dispatch(watchlistSlice.actions.addMovie(movie))
   }, [movie])
   const watchlist = useSelector(selectWatchlistModuleState);
   console.log(watchlist)
   return(
     <button onClick={addMovie}>click</button>
      
   )
}