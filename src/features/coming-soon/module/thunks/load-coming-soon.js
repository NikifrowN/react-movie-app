import { comingSoonSlice } from "..";
import { selectComingSoonModuleState } from "../selectors";


export function loadComingSoon() {
   return function (dispatch, getState) {
      const data = selectComingSoonModuleState(getState());

      if(data?.length) {
         return;
      }

      dispatch(comingSoonSlice.actions.startLoading(null));

      fetch("https://imdb-api.com/en/API/ComingSoon/k_aiyw0b1a")
      .then((response) => response.json())
      .then((comingSoon) => {
         dispatch(comingSoonSlice.actions.finishLoading(comingSoon.items));
      })
   };
}
