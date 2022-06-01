import styles from './styles.module.scss';
import { useState } from 'react';
import { PersonCardHeader } from '../person-card-header/component';
import { PersonCardInfo } from '../person-card-info/component';
import { PersonTitle } from '../person-title/component';

export const PersonCard = ({person}) => {
   const [activeTab, setActiveTab] = useState('');

   let actedIn = '';
   if(person.role.includes('Actor')) {
      actedIn = person.castMovies.filter(item => item.role === 'Actor');
      } else{
         actedIn = person.castMovies.filter(item => item.role === 'Actress');
      }

   const directed = person.castMovies.filter(item => item.role === 'Director');

   return(
      <div className={styles.root}>
         <PersonCardHeader person={person} />
         <PersonCardInfo 
            person={person} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            actedIn={actedIn}
            directed={directed}
            />

            {activeTab === 'actedIn' && (
               <div className={styles.works}> 
                  {actedIn.map((item) => {
                     return(
                        <PersonTitle movie={item} />
                     )
                  })}
               </div>   
            )}
            
            {activeTab === 'directed' && (
               <div className={styles.works}> 
                  {directed.map((item) => {
                     return(
                        <PersonTitle movie={item} />
                     )
                  })}
               </div>
            )}
      </div>
   )
}