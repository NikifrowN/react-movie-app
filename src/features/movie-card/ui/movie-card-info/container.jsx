import { useDispatch } from "react-redux";
import { addMovieToList, deleteMovieFromList } from "../../../watchlist/module/actions";
import { MovieCardInfo } from "./component";

export const MovieCardInfoContainer = ({movie, setActiveTab, activeTab}) => {
   const dispatch = useDispatch();

   const addMovie = (movieId) => {
      dispatch(addMovieToList(movieId))
   };
   const deleteMovie = (movieId) => {
      dispatch(deleteMovieFromList(movieId))
   };

   return(
      <MovieCardInfo  
         movie={movie} 
         setActiveTab={setActiveTab}
         activeTab={activeTab}
         deleteMovie={deleteMovie}
         addMovie={addMovie}
      />
   )
}