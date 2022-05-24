import { useEffect, useState } from "react"
import { Top10Movies } from "../../../top10-movies/ui/top10-movies/component";

export const ComingSoon = ({comingSoonIds}) => {
   // const [comingSoon, setComingSoon] = useState([]);

   // const getPopular = async () => {
   //    const check = localStorage.getItem('comingSoon');

   //    if (check) {
   //       setComingSoon(JSON.parse(check))
   //    } else {
   //       const api = await fetch('https://imdb-api.com/en/API/ComingSoon/k_aiyw0b1a');
   //       const data = await api.json();

   //       localStorage.setItem('comingSoon', JSON.stringify(data.items))
   //       setComingSoon(data.items)
   //    }
   // };

   // useEffect(() => {
   //    getPopular();
   // }, []);
   // console.log(comingSoon)
   // if (!comingSoon?.length) {
   //    return null;
   // }
   // console.log(comingSoonIds)
   return(
      <Top10Movies ids={comingSoonIds} label='Coming soon' />
      // <p>sdf</p>
   )
}