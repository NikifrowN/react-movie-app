import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const MovieCardCast = ({cast}) => (
   <div className={styles.cast}>
      <p className={styles.castTitle}>
         Actors:
      </p>
      {cast.map((item) => {
         return(
            <div key={item.id}>
               <div className={styles.actors}>
                  <Link to={'/person/' + item.id} style={{color: 'inherit', textDecoration: 'none'}} >
                     <img loading='lazy' src={item.image}/>
                  </Link>
                  <div>
                  <Link to={'/person/' + item.id} style={{color: 'inherit', textDecoration: 'none'}} >
                     <p className={styles.castName}>
                        {item.name}
                     </p>
                  </Link>
                  <p>
                     {item.asCharacter}
                  </p>
               </div>
            </div>
         </div>
         )
      })} 
   </div>
)
