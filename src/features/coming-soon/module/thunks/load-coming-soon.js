import { comingSoonSlice } from "..";


export function loadComingSoon() {
   return function (dispatch) {
      dispatch(comingSoonSlice.actions.startLoading(null));

      fetch("https://imdb-api.com/en/API/ComingSoon/k_aiyw0b1a")
      .then((response) => response.json())
      .then((comingSoon) => {
         dispatch(comingSoonSlice.actions.finishLoading(comingSoon.items));
      })
      .catch((error) => {
         dispatch(comingSoonSlice.actions.failLoading(error));
      });
   };
}
