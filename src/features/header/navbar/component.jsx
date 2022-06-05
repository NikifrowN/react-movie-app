import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
   return(
      <nav className={styles.root}>
         <NavLink to={'/react-movie-app/'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Home
         </NavLink>
         <NavLink to={'/react-movie-app/top250movies'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Top 250 Movies
         </NavLink>
         <NavLink to={'/react-movie-app/top250TVs'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Top 250 TV Shows
         </NavLink>
         <NavLink to={'/react-movie-app/watchlist'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Watchlist
         </NavLink>
      </nav>
   )
}