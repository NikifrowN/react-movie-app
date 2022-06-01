import { AddToWatchilstContainer } from '../../../watchlist/ui/add-to-watchlist/container';
import { InfoItem } from '../info-item/component';
import styles from './styles.module.scss';

export const MovieCardInfo = ({movie}) => (
   <div className={styles.root}>
      <div className={styles.poster}>
         <img src={movie.image} />
         <AddToWatchilstContainer 
            movie={movie}
            size='big'
         />
      </div>
      <div className={styles.about}>
         <div className={styles.aboutItems}>
            <div className={styles.genreList}>
               {movie.genreList.map((item) => {
                  return(
                     <p className={styles.genre} key={item.key}>
                        {item.key}
                     </p>
                  )
               })}
            </div>
            <InfoItem text={movie.awards} label={'Awards:'} />
            <InfoItem text={movie.plot} label={'Plot:'} />
            <InfoItem text={movie.directorList} label={'Directed by:'} />
            <InfoItem text={movie.writerList} label={'Written By:'} />
            <InfoItem text={movie.starList} label={'Stars:'} />   
         </div>
      </div>
   </div>
)
