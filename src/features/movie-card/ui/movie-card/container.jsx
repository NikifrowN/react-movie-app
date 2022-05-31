import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { Error } from "../../../error/ui/component";
import { LoadingSpinner } from "../../../loading/ui/component";
import { selectIsMovieLoading, selectMovie } from "../../module/selectors";
import { loadMovie } from "../../module/thunks/load-movie";
import { MovieCard } from "./component";

export const MovieCardContainer = () => {
   let params = useParams();
   const dispatch = useDispatch();
   const movie = useSelector(selectMovie);
   const isLoading = useSelector(selectIsMovieLoading);
   const noData = !!movie;

   useEffect(() => {
      dispatch(loadMovie(params.movie))
   }, [params.movie]);
   console.log(noData)
   return isLoading ? (<LoadingSpinner/>) : (
      noData ? (<Error/>) : (
         <MovieCard movie={movie} />
      )
   )
}