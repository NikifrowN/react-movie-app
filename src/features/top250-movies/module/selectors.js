export const selectTop250MoviesModuleState = (state) => state.top250movies;

export const selectIsTop250MoviesLoading = (state) => 
   selectTop250MoviesModuleState(state).isLoading;

export const selectTop250Movies = (state) => {
   const entities = selectTop250MoviesModuleState(state).entities;

   return Object.values(entities);
}   