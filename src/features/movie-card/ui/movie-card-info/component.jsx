import { useState } from 'react';
import { Tabs } from '../../../tabs/ui/tabs/component';
import { AddToWatchlist } from '../../../watchlist/ui/add-to-watchlist/ui/add-to-watchlist/component';
import { InfoItem } from '../info-item/component'
import styles from './styles.module.css'

export const MovieCardInfo = ({movie, setActiveTab, activeTab, addMovie, deleteMovie}) => {
   // const [isAdded, setAdded] = useState(false);

   // const toggleAdded = () => {
   //    setAdded(!isAdded)
   // }

   // function handleClick(e) {
   //    isAdded ? deleteMovie(movie.id) : addMovie(movie.id)
   //    toggleAdded();
   //  }

   const actorLabel = {
      label: 'Show Actors',
      key: 'actors',
   };
   const awardsLabel = {
      label: movie.awards ? 'Show Awards' : null,
      key: 'awards',
   };
   const labels = [actorLabel, awardsLabel];

   return(
      <div className={styles.root}>
         <div className={styles.poster}>
            <img src={movie.image} />
            <AddToWatchlist 
               size='big'
               id={movie.id}
               addMovie={addMovie}
               deleteMovie={deleteMovie} 
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
               <InfoItem text={movie.awards} name={'Awards:'} />
               <InfoItem text={movie.plot} name={'Plot:'} />
               <InfoItem text={movie.directorList} name={'Directed by:'} />
               <InfoItem text={movie.writerList} name={'Written By:'} />
               <InfoItem text={movie.starList} name={'Stars:'} />   
            </div>
            <Tabs labels={labels} setActiveTab={setActiveTab} activeTab={activeTab} />
         </div>
      </div>
   )
}