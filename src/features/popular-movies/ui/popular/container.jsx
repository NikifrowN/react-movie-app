import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectIsPopularError, selectIsPopularLoading, selectPopularIds } from "../../module/selectors";
import { loadPopular } from "../../module/thunks/load-popular";
import { PopularMovies } from "./component";

export const PopularContainer = () => {
   const dispatch = useDispatch();
   const popularIds = useSelector(selectPopularIds);
   const isLoading = useSelector(selectIsPopularLoading);
   const error = useSelector(selectIsPopularError);

   useEffect(() => {
      dispatch(loadPopular());
   }, [])

   // console.log(comingSoonIds)
   return error ? (<span>error</span>) : (
      isLoading ? (<span>loading</span>) : (
         <PopularMovies popularIds={popularIds} />
      )
   )
}