import styles from './styles.module.scss';

export const PersonCardHeader = ({person}) => {
   return(
      <div className={styles.root}>
         <div className={styles.item}>
            <h4 className={styles.name}>
               {person.name}
            </h4>
            <p className={styles.birthDate}>
               {person.birthDate}
            </p>
         </div>
         <p className={styles.role}>
            {person.role}
         </p>
      </div>
   )
}