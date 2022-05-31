export const selectSearchedModuleState = (state) => state.searched;

export const selectIsSearchedLoading = (state) => 
   selectSearchedModuleState(state).isLoading;
   
export const selectSearched = (state) => {
   const entities = selectSearchedModuleState(state).entities;

   return Object.values(entities);
}