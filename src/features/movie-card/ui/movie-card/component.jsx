import { MovieCardCast } from "../movie-card-actors/component";
import { MovieCardHeader } from "../movie-card-header/component";
import { MovieCardInfo } from "../movie-card-info/component";
import { motion } from 'framer-motion';


export const MovieCard = ({movie}) => (
   <>
      <MovieCardHeader movie={movie} />
      <MovieCardInfo
         movie={movie} 
      />
      <MovieCardCast cast={movie.actorList}/>
   </>
)