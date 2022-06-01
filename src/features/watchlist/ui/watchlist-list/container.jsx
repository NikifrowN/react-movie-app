import { useDispatch, useSelector } from "react-redux";
import { watchlistSlice } from "../../module";
import { selectWatchlistModuleState } from "../../module/selectors";
import { WatchlistList } from "./component";

export const WatchListContainer = () => {
   const dispatch = useDispatch();
   const watchlist = useSelector(selectWatchlistModuleState);
   
   const clearList = () => {
      dispatch(watchlistSlice.actions.clearWatchlist())
   };

   return(
      <WatchlistList
         clearList={clearList}
         watchlist={watchlist}
      />
   )

}