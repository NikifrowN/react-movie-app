export const selectComingSoonModuleState = (state) => state.comingSoon;

export const selectComingSoonIds = (state) => 
   selectComingSoonModuleState(state).ids;

export const selectIsComingSoonLoading = (state) => 
   selectComingSoonModuleState(state).isLoading;

export const selectIsComingSoonError = (state) =>
   selectComingSoonModuleState(state).error;
   
export const selectComingSoonById = (state, payload) =>
   selectComingSoonModuleState(state).entities[payload];      