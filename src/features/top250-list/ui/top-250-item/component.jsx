import styles from './styles.module.scss';

export const Top250Item = ({movie}) => {
   <li className={styles.item}>
   <div className={styles.poster}>
      <img src={movie.image} loading='lazy' />
   </div>
   <h3 className={styles.title}>
      <span>
         {movie.rank}. {movie.title} ({movie.year})
      </span>
   </h3>
   <div className={styles.rating}>
      Rating:
      <span> 
         {movie.imDbRating} 
      </span>
   </div>
</li>
}