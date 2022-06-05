import styles from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from './img/search.svg';

export const SearchBar = () => {
   const [input, setInput] = useState('');
   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      navigate('/react-movie-app/search/' + input);
   };

   return(
      <form 
         onSubmit={submitHandler} 
         className={styles.root}
      >
         <div className={styles.inputBlock}>
            <img 
               className={styles.searchIcon} 
               src={SearchIcon}
               loading='lazy' 
            />
            <input 
               onChange={(e) => setInput(e.target.value)}
               type='text'
               value={input} 
            />
         </div>
      </form>
   )
}