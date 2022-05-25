import { top250MoviesSlice } from "..";


export function loadTop250Movies() {
   return function (dispatch, getState) {
      // const data = selectComingSoonModuleState(getState());

      // if(data?.length) {
      //    return;
      // }
      
      dispatch(top250MoviesSlice.actions.startLoading(null));

      fetch("https://imdb-api.com/en/API/Top250Movies/k_aiyw0b1a")
      .then((response) => response.json())
      .then((top250Movies) => {
         dispatch(top250MoviesSlice.actions.finishLoading(top250Movies.items));
      })
   };
}
