export const selectTop250MoviesModuleState = (state) => state.top250movies;

export const selectTop250MoviesIds = (state) => 
   selectTop250MoviesModuleState(state).ids;

export const selectIsTop250MoviesLoading = (state) => 
   selectTop250MoviesModuleState(state).isLoading;
   
export const selectTop250MoviesById = (state, payload) =>
selectTop250MoviesModuleState(state).entities[payload];      

export const selectTop250Movies = (state) => {
   const entities = selectTop250MoviesModuleState(state).entities;

   return Object.values(entities);
}   