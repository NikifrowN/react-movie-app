import { Top10Movies } from "../../../top10-movies/ui/top10-movies/component";

export const ComingSoon = ({comingSoonIds}) => {

   return(
      <Top10Movies ids={comingSoonIds} label='Coming soon' />
   )
}