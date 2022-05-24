import { ComingSoon } from "../features/coming-soon/ui/coming-soon/component"
import { ComingSoonContainer } from "../features/coming-soon/ui/coming-soon/container";
import { PopularMovies } from "../features/popular-movies/ui/popular/component"
import { PopularContainer } from "../features/popular-movies/ui/popular/container";

export const Main = () => {
   return(
      <div>
         <PopularContainer />
         <ComingSoonContainer />
      </div>
   )
}