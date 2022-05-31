import styles from './styles.module.scss';

export const MovieCardHeader = ({movie}) => {
   return(
      <div className={styles.root}>
         <div className={styles.headerItem}>
            <h3 className={styles.title}>
               {movie.title}
            </h3>
            <div className={styles.info}>
               <p>
                  {movie.year}
               </p>
               <p>
                  {movie.contentRating}
               </p>
               <p>
                  {movie.runtimeStr}
               </p>
            </div>
         </div>
         <div className={styles.headerItem}>
            {movie.imDbRating > 0 && (
               <div className={styles.rating}>
                  <span className={styles.ratingTitle}>
                     IMDb Rating:
                  </span>
                  <span className={styles.ratingData}>
                     {movie.imDbRating}
                  </span>
               </div>
            )}
         </div>
      </div>
   )
}