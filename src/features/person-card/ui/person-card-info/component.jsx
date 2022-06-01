import styles from './styles.module.scss';
import { KnownFor } from "../known-for/component";
// import { Tabs } from '../../../tabs/ui/tabs/component';

export const PersonCardInfo = ({person, activeTab, setActiveTab, actedIn, directed}) => {
   const actedLabel = {
      label: actedIn.length  ? 'Acted In' : null,
      key: 'actedIn',
   };
   const directedLabel = {
      label: directed.length ? 'Directed' : null,
      key: 'directed',
   };

   const labels = [actedLabel, directedLabel];

   return(
      <div className={styles.root}>
         <div className={styles.poster}>
            <img src={person.image} />
         </div>
         <div className={styles.content}>
            {/* <div className={styles.info}>
               <p>
                  {person.awards}
               </p>
            </div> */}
            <KnownFor knownFor={person.knownFor}/>
            {/* <Tabs labels={labels} setActiveTab={setActiveTab} activeTab={activeTab} /> */}
         </div>
      </div>
   )
}