import { Link } from 'react-router-dom';
import { SearchedItem } from '../searched-item/component';
import styles from './styles.module.scss';

export const SearchedList = ({searched, param}) => {
   const searchedByName = searched.filter(item => item.resultType === 'Name');
   const searchedByTitle = searched.filter(item => item.resultType === 'Title');
   
   return(
      <div className={styles.root}>
         <p className={styles.title}>Results for "{param}":</p>

         {searchedByName.length > 0 && (
            <p className={styles.subtitle}>Names:</p>
         )}   
         {searchedByName.map((item) => {
            return(
               <Link className={styles.link} to={'/react-movie-app/person/' + item.id}>
                  <SearchedItem key={item.id} item={item}/>
               </Link>
            )
         })}

         {searchedByTitle.length > 0 && (
            <p className={styles.subtitle}>Titles:</p>
         )}   
         {searchedByTitle.map((item) => {
            return(
               <Link className={styles.link}  to={'/react-movie-app/movie/' + item.id}>
                  <SearchedItem key={item.id} item={item}/>
               </Link>
            )
         })}
      </div>
   )
}