export const selectMovieModuleState = (state) => state.movie;

export const selectIsMovieLoading = (state) => 
   selectMovieModuleState(state).isLoading;
   
export const selectMovie = (state) => {
   const entity = selectMovieModuleState(state).entity;

   return entity.payload;
}