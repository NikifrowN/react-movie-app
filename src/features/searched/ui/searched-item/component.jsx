import styles from './styles.module.scss';

export const SearchedItem = ({item}) => (
   <div className={styles.root}>
      <div className={styles.image}>
         <img src={item.image} loading='lazy' />
      </div>
      <p>
         <span className={styles.title}>
            {item.title}       
         </span>
         <span className={styles.description}>
            {item.description}
         </span>
      </p>
   </div>
)