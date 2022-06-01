import styles from './styles.module.scss';
import { WatchlistItemContainer } from "../watchlist-item/container";

export const WatchlistList = ({watchlist, clearList}) => (
   watchlist?.length > 0 ? (
      <>
         <div className={styles.header}>
            <p>Your watchlist:</p>
            <button onClick={() => clearList()}>Clear watchlist</button>
         </div>
         <div className={styles.items}>
            {watchlist.map((movie) => {
               return(
                  <WatchlistItemContainer movie={movie}/>
               )
            })}
         </div>
      </>
   ) : (
      <div className={styles.header}>
         <p>Your watchlist is empty</p>
      </div>
   )
)
