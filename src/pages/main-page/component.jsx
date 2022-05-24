import { ComingSoonContainer } from "../../features/coming-soon/ui/coming-soon/container";
import { PopularContainer } from "../../features/popular-movies/ui/popular/container";
import styles from './styles.module.scss';


export const MainPage = () => {
   return(
      <div className={styles.root}>
         <PopularContainer />
         <ComingSoonContainer />
      </div>
   )
}