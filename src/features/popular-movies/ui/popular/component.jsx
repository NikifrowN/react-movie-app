import { Top10Movies } from '../../../top10-movies/ui/top10-movies/component';

export const PopularMovies = ({popularIds}) => (
   <Top10Movies ids={popularIds} label='Top 10 popular movies' />
)
