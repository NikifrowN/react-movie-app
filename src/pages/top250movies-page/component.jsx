import { useEffect, useState } from "react";
import { Top250MoviesContainer } from "../../features/top250-movies/ui/container";

export const Top250MoviesPage = () => {
   // const [top, setTop] = useState([]);

   // const getTop = async () => {
   //    const check = localStorage.getItem('top250');

   //    if (check) {
   //       setTop(JSON.parse(check));
   //    } else {
   //       const api = await fetch('https://imdb-api.com/en/API/Top250Movies/k_aiyw0b1a');
   //       const data = await api.json();

   //       localStorage.setItem('top250', JSON.stringify(data.items));
   //       setTop(data.items);
   //    }
   // }

   // useEffect(() => {
   //    getTop();
   // }, [])

   return(
      <Top250MoviesContainer />
   )
}