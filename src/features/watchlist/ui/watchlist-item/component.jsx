import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

export const WatchlistItem = ({movie, removeMovie}) => (
   <div className={styles.root}>
      <Link to={'/react-movie-app/movie/' + movie.id} key={movie.id} style={{color: 'inherit', textDecoration: 'none'}}>
         <div className={styles.poster}>
            <img src={movie.image} />
         </div>
      </Link> 
      <div className={styles.content}>
         <div className={styles.info} >
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.crew}</p>
         </div>
         <div>
            <button 
               onClick={removeMovie}
               className={styles.btn}
            >Remove</button>
         </div>
      </div>
   </div>  
)
