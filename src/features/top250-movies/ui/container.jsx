import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../error/ui/component";
import { LoadingSpinner } from "../../loading/ui/component";
import { selectIsTop250MoviesLoading, selectTop250Movies} from "../module/selectors";
import { loadTop250Movies } from "../module/thunks/load-250movies";
import { Top250Movies } from "./component";

export const Top250MoviesContainer = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsTop250MoviesLoading);
   const top250movies = useSelector(selectTop250Movies);
   const noData = !top250movies?.length;

   useEffect(() => {
      dispatch(loadTop250Movies());
   }, []);

   return isLoading ? (<LoadingSpinner/>) : (
      noData ? (<Error/>) : (
         <Top250Movies top250movies={top250movies} />
      )
   )
}