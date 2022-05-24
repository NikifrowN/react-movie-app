import { useSelector } from "react-redux"
import { selectComingSoonById } from "../../coming-soon/module/selectors"
import { selectPopularById } from "../../popular-movies/module/selectors";
import { MoviePreview } from "./component"

export const MoviePreviewContainer = ({movieId, label}) => {
   let selector = '';
   if(label === 'Coming soon') {
      selector = selectComingSoonById;
   } else if (label === 'Top 10 popular movies') {
      selector = selectPopularById;
   }

   const movie = useSelector(state => selector(state, movieId))
   console.log(movie)
   return(
      <MoviePreview movie={movie} />
   )
}