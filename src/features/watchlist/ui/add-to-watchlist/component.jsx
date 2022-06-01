import { useState } from 'react';
import { useSelector } from 'react-redux';
import BlackHeart from './img/blackHeart.png';
import RedHeart from './img/redHeart.png';
import styles from './styles.module.scss';

export const AddToWatchlist = ({size, addMovie, removeMovie, movie, isAdded}) => {

   function handleClick(e) {
      e.preventDefault();
      isAdded ? removeMovie(movie) : addMovie(movie)
   }

   return(
      <button 
         onClick={handleClick}
         className={styles.addBtn}
      >
         <img 
            src={isAdded ? RedHeart : BlackHeart}
            className={styles[size]}
         />
      </button>
   )
}