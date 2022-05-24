import { popularSlice } from "..";


export function loadPopular() {
   return function (dispatch) {
      dispatch(popularSlice.actions.startLoading(null));

      fetch("https://imdb-api.com/en/API/MostPopularMovies/k_aiyw0b1a")
      .then((response) => response.json())
      .then((popular) => {
         dispatch(popularSlice.actions.finishLoading(popular.items));
      })
      .catch((error) => {
         dispatch(popularSlice.actions.failLoading(error));
      });
   };
}
