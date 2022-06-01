import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const KnownFor = ({knownFor}) => (
   <div className={styles.root}>
      <p className={styles.header}>
         Known for:
      </p>
      <div className={styles.content}>
         {knownFor.map((item) => {
            return(
               <div className={styles.item} key={item.id}>
                  <Link to={'/movie/' + item.id}>
                     <div className={styles.poster}>
                        <img src={item.image} />   
                     </div>
                  </Link>
                  <div>
                     <Link to={'/movie/' + item.id} style={{color: 'inherit', textDecoration: 'none'}}> 
                        <p className={styles.title}>
                           {item.title}
                        </p>
                     </Link>
                     <p className={styles.year}>
                        {item.year}
                     </p> 
                     <p className={styles.role}>
                        {item.role}
                     </p> 
                  </div>
               </div>
            )
         })}
      </div>
   </div>
)
