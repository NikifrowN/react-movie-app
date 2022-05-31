import { searchedSlice } from "..";

export function loadSearched(param) {
   return function (dispatch, getState) {
      // const data = selectComingSoonModuleState(getState());

      // if(data?.length) {
      //    return;
      // }
      dispatch(searchedSlice.actions.clear(null));
      dispatch(searchedSlice.actions.startLoading(null));

      fetch((`https://imdb-api.com/en/API/SearchAll/${process.env.REACT_APP_API_KEY}/${param}`))
      .then((response) => response.json())
      .then((searched) => {
         dispatch(searchedSlice.actions.finishLoading(searched.results));
      })

   };
}
