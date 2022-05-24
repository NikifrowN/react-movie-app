import styles from './styles.module.scss'

export const MoviePreview = ({movie}) => {
   return(
      <div className={styles.root}>
         <img className={styles.poster} src={movie.image} loading="lazy" />
      </div>
   )
}