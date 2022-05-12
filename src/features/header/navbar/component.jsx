import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
   return(
      <nav className={styles.root}>
         <NavLink to={'/'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Home
         </NavLink>
         <NavLink to={'/top250movies'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Top 250 Movies
         </NavLink>
         <NavLink to={'/top250TVs'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Top 250 TV Shows
         </NavLink>
         <NavLink to={'/watchlist'} className={({isActive}) => isActive ? styles.selected : styles.link}>
            Watchlist
         </NavLink>
      </nav>
   )
}