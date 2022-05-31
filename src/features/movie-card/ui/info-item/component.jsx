import { Link } from 'react-router-dom';
import styles from './styles.module.css'

export const InfoItem = ({text, name}) => {
   if(!text) {
      return null;
   }

   return(
      <div className={styles.root}>                  
         <span className={styles.title}>
            {name}
         </span>      
         {Array.isArray(text) ? (
            text.map((item) => {
               return(
                  <span className={styles.name} key={item.id}>
                     <Link to={'/person/' + item.id} style={{color: 'inherit', textDecoration: 'none'}}>
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
}