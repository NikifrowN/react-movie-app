import { Top250List } from "../../top250-list/ui/top250-list/component";

export const Top250Movies = ({top250movies}) => (
   <Top250List top={top250movies} label='IMDb Top250 Movies' />
)