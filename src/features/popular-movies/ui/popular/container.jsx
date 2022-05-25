import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Error } from "../../../error/ui/component";
import { LoadingSpinner } from "../../../loading/ui/component";
import { selectIsPopularLoading, selectPopularIds } from "../../module/selectors";
import { loadPopular } from "../../module/thunks/load-popular";
import { PopularMovies } from "./component";

export const PopularContainer = () => {
   const dispatch = useDispatch();
   const popularIds = useSelector(selectPopularIds);
   const isLoading = useSelector(selectIsPopularLoading);

   useEffect(() => {
      dispatch(loadPopular());
   }, [])

   return isLoading ? (<LoadingSpinner/>) : (
      !popularIds?.length  ? (<Error/>) : (
         <PopularMovies popularIds={popularIds} />
      )
   )
}