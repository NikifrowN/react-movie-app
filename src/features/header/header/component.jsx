import { Navbar } from '../navbar/component';
import { SearchBar } from '../searchbar/component';
import styles from './styles.module.scss';

export const Header = () => (
   <header className={styles.root}>
      <h1 className={styles.title}>
         Movie <span>app</span>
      </h1>
      <Navbar />
      <SearchBar />
   </header>
)