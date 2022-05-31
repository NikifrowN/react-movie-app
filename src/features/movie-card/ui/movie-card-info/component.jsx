import { InfoItem } from '../info-item/component'
import styles from './styles.module.scss'

export const MovieCardInfo = ({movie}) => {

   return(
      <div className={styles.root}>
         <div className={styles.poster}>
            <img src={movie.image} />
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
               <InfoItem text={movie.awards} name={'Awards:'} />
               <InfoItem text={movie.plot} name={'Plot:'} />
               <InfoItem text={movie.directorList} name={'Directed by:'} />
               <InfoItem text={movie.writerList} name={'Written By:'} />
               <InfoItem text={movie.starList} name={'Stars:'} />   
            </div>
         </div>
      </div>
   )
}