import { useDispatch } from "react-redux";
import { watchlistSlice } from "../../module";
import { WatchlistItem } from "./component";

export const WatchlistItemContainer = ({movie}) => {
   const dispatch = useDispatch();
   const removeMovie = () => {
      dispatch(watchlistSlice.actions.removeMovie(movie))
   }
   return(
      <WatchlistItem movie={movie} removeMovie={removeMovie} />
   )
}