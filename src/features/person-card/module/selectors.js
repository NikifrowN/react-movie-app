export const selectPersonModuleState = (state) => state.person;

export const selectIsPersonLoading = (state) => 
   selectPersonModuleState(state).isLoading;
   
export const selectPerson = (state) => {
   const entity = selectPersonModuleState(state).entity;

   return entity.payload;
}