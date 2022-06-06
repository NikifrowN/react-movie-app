import styles from './styles.module.scss';
import { WatchlistItemContainer } from "../watchlist-item/container";
import { motion } from 'framer-motion';

export const WatchlistList = ({watchlist, clearList}) => (
   watchlist?.length > 0 ? (
      <motion.div
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
         <div className={styles.header}>
            <p>Your watchlist:</p>
            <button onClick={() => clearList()}>Clear watchlist</button>
         </div>
         <div className={styles.items}>
            {watchlist.map((movie) => {
               return(
                  <WatchlistItemContainer 
                     movie={movie}
                     key={movie.id}
                     />
               )
            })}
         </div>
      </motion.div>
   ) : (
      <motion.div className={styles.header}
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
         <p>Your watchlist is empty</p>
      </motion.div>
   )
)
