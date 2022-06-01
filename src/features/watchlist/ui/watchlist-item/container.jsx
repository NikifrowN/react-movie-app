import { useDispatch } from "react-redux";

import { WatchlistItem } from "./component";

export const WatchlistItemContainer = ({movieId}) => {
   const dispatch = useDispatch();


   return(
      <WatchlistItem movieId={movieId}/>
   )
}