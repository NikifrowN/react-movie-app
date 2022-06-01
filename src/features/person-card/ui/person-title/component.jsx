import { Link } from "react-router-dom";
import styles from './styles.module.scss'

export const PersonTitle = ({movie}) => {

   return(
      <div className={styles.root}>
         <Link to={'/movie/' + movie.id} style={{color: 'inherit', textDecoration: 'none'}}>
            <span className={styles.title}>{movie.title} ({movie.year})</span>  
            <p className={styles.description}>{movie.description}</p>
         </Link>
      </div>

   )
}