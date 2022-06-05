import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const InfoItem = ({text, label}) => (
   <div className={styles.root}>                  
      <span className={styles.title}>
         {label}
      </span>      
      {Array.isArray(text) ? (
         text.map((item) => {
            return(
               <span className={styles.name} key={item.id}>
                  <Link to={'/react-movie-app/person/' + item.id} style={{color: 'inherit', textDecoration: 'none'}}>
                     {item.name}
                  </Link>
               </span>
               )
            })
         ) 
         : (
         <span className={styles.text}>
            {text}
         </span>
         )}
   </div>
   )
