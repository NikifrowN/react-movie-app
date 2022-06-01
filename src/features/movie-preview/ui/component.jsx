import { AddToWatchilstContainer } from '../../watchlist/ui/add-to-watchlist/container';
import styles from './styles.module.scss';

export const MoviePreview = ({movie}) => {
   return(
      <div className={styles.root}>
         <img className={styles.poster} src={movie.image} />
         <AddToWatchilstContainer 
            movie={movie}
            size='medium'
         />
      </div>
   )
}