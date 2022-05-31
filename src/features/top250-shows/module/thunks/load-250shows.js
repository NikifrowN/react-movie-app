import { top250ShowsSlice } from "..";


export function loadTop250Shows() {
   return function (dispatch, getState) {
      // const data = selectComingSoonModuleState(getState());

      // if(data?.length) {
      //    return;
      // }
      
      dispatch(top250ShowsSlice.actions.startLoading(null));

      fetch(`https://imdb-api.com/en/API/Top250TVs/${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((top250shows) => {
         dispatch(top250ShowsSlice.actions.finishLoading(top250shows.items));
      })
   };
}
