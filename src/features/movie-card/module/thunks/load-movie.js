import { movieSlice } from "..";


export function loadMovie(param) {
   return function (dispatch) {
      dispatch(movieSlice.actions.clear(null));
      dispatch(movieSlice.actions.startLoading(null));

      fetch((`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/${param}`))
      .then((response) => response.json())
      .then((movie) => {
         dispatch(movieSlice.actions.finishLoading(movie));
      })

   };
}