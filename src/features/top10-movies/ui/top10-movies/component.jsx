import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { MoviePreviewContainer } from '../../../movie-preview/ui/container';
import styles from './styles.module.scss'

export const Top10Movies = ({ids, label}) => {
   return(
      <div className={styles.root}>
         <p className={styles.title}>{label}</p>
         <Splide options={{
            perPage: 5,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '4rem',
            padding: '3.75rem',
            }}>
            {ids.slice(0, 10).map((movieId) => {
               return(
                  <SplideSlide key={movieId}>
                     <Link to={'/movie/' + movieId}>
                        <MoviePreviewContainer
                           movieId={movieId}
                           label={label}
                        />  
                     </Link>
                  </SplideSlide>   
               )
            })}
         </Splide>   
      </div>
   )
}