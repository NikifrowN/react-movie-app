import { useDispatch, useSelector } from "react-redux"
import { selectWatchlistModuleState } from "../../module/selectors";
import { WatchlistList } from "./component";

export const WatchListContainer = () => {
   const dispatch = useDispatch();
   const watchlist = useSelector(selectWatchlistModuleState);


   return(
      // <WatchlistList 
      //    // deleteMovie={deleteMovie}
      //    clearList={clearList}
      //    watchlist={watchlist}
      // />
      <p>container</p>
   )

}