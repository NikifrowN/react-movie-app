import styles from './styles.module.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const WatchlistItem = ({movieId, deleteMovie}) => {
   const [movie, setMovie] = useState([]);

   const getMovie = async () => {
      const api = await fetch(`https://imdb-api.com/en/API/Title/k_aiyw0b1a/${movieId}`);
      const data = await api.json();

      setMovie(data);
   }

   useEffect(() => {
      getMovie();
   }, [movieId]);

   console.log(movie)

   return(
      <div className={styles.root}>
         <Link to={'/movie/' + movieId} key={movieId} style={{color: 'inherit', textDecoration: 'none'}}>
            <p>{movie.fullTitle}</p>
            <img src={movie.image} />
         </Link>
         <button onClick={() => deleteMovie(movieId)}> <span>delete from watchlist</span> </button>
      </div>
   )
}