import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { MoviePreviewContainer } from '../../../movie-preview/ui/container';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export const Top10Movies = ({ids, label}) => (
   <motion.div 
      className={styles.root}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
   >
      <p className={styles.title}>{label}</p>
      <Splide options={{
         perMove: 2,
         fixedWidth : '10rem',
         fixedHeight: '16rem',
         gap : '4.3rem',
         padding: { left: '4rem'},
         pagination: false,
      }}>
         {ids.slice(0, 10).map((movieId) => {
            return(
               <SplideSlide key={movieId}>
                  <Link to={'/react-movie-app/movie/' + movieId}>
                     <MoviePreviewContainer
                        movieId={movieId}
                        label={label}
                     />  
                  </Link>
               </SplideSlide>   
            )
         })}
      </Splide>   
   </motion.div>
)
