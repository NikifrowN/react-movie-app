import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Error } from "../../error/ui/component";
import { LoadingSpinner } from "../../loading/ui/component";
import { selectIsTop250ShowsLoading, selectTop250Shows } from "../module/selectors";
import { loadTop250Shows } from "../module/thunks/load-250shows";
import { Top250Shows } from "./component";


export const Top250ShowsContainer = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsTop250ShowsLoading);
   const top250shows = useSelector(selectTop250Shows);
   const noData = !top250shows?.length;

   useEffect(() => {
      dispatch(loadTop250Shows());
   }, []);

   return isLoading ? (<LoadingSpinner/>) : (
      noData ? (<Error/>) : (
         <Top250Shows top250shows={top250shows} />
      )
   )
}