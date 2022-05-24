import { useEffect, useState } from "react"
import { Top10Movies } from '../../../top10-movies/ui/top10-movies/component';

export const PopularMovies = ({popularIds}) => {
   // const [popular, setPopular] = useState([]);

   // const getPopular = async () => {
   //    const check = localStorage.getItem('popular');

   //    if (check) {
   //       setPopular(JSON.parse(check))
   //    } else {
   //       const api = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_aiyw0b1a');
   //       const data = await api.json();

   //       localStorage.setItem('popular', JSON.stringify(data.items))
   //       setPopular(data.items)
   //    }
   // }

   // useEffect(() => {
   //    getPopular();
   // }, [])

   // if (!popular?.length) {
   //    return null;
   // }

   return(
      <Top10Movies ids={popularIds} label='Top 10 movies' />
   )

}