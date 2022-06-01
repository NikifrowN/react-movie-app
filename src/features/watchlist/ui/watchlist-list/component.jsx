import { WatchlistItem } from "../watchlist-item/component"
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { WatchlistItemContainer } from "../watchlist-item/container"

export const WatchlistList = ({watchlist, clearList}) => {

   return(
      <div className={styles.root} >
         {watchlist.length > 0 ? (
            <div className={styles.header}>
               <p>Your watchlist:</p>
               <button onClick={() => clearList()}>Clear watchlist</button>
            </div>
         ) : (
            <div className={styles.header}>
               <p>Your watchlist is empty</p>
            </div>
         )}
         <div className={styles.items}>
            {watchlist.map((movieId) => {
               return(
                  <WatchlistItemContainer movieId={movieId}/>
               )
            })}
         </div>
      </div>
   )
}