import { Link } from "react-router-dom";
import { useSortableData } from "../../hooks/useSortableData";
import { Top250Item } from "../top-250-item/component";
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export const Top250List = ({top, label}) => {
   const { items, requestSort} = useSortableData(top);

   return(
      <motion.div className={styles.root}
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
         <h3 className={styles.title}>
            {label}
         </h3>
         <div className={styles.buttons}>
            <button 
               onClick={() => requestSort('year')}
               className={styles.button}
            >
               Sort by Year
            </button>
            <button
               onClick={() => requestSort('imDbRating')}
               className={styles.button}
            >
               Sort by IMDb Rating
            </button>
         </div>
         {items.map((movie) => {
            return(
               <Link 
                  className={styles.link} 
                  to={'/react-movie-app/movie/' + movie.id}
                  key={movie.id}
               >
                  <Top250Item movie={movie} />
               </Link>
            )
         })}
      </motion.div>
   )
}