export const selectTop250ShowsModuleState = (state) => state.top250shows;

export const selectIsTop250ShowsLoading = (state) => 
   selectTop250ShowsModuleState(state).isLoading;
   

export const selectTop250Shows = (state) => {
   const entities = selectTop250ShowsModuleState(state).entities;

   return Object.values(entities);
}   