import { personSlice } from '..'

export function loadPerson(param) {
   return function (dispatch) {
      dispatch(personSlice.actions.clear(null));
      dispatch(personSlice.actions.startLoading(null));

      fetch((`https://imdb-api.com/en/API/Name/${process.env.REACT_APP_API_KEY}/${param}`))
      .then((response) => response.json())
      .then((person) => {
         dispatch(personSlice.actions.finishLoading(person));
      })

   };
}