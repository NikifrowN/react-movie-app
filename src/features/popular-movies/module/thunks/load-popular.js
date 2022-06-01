import { popularSlice } from "..";
import { selectPopularIds, selectPopularModuleState } from "../selectors";

export function loadPopular() {
   return function (dispatch, getState) {
      const data = selectPopularModuleState(getState())
      
      if(data.length) {
         return;
      }

      dispatch(popularSlice.actions.startLoading(null));

      fetch(`https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((popular) => {
         dispatch(popularSlice.actions.finishLoading(popular.items));
      })
   };
}
