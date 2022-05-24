export const selectPopularModuleState = (state) => state.popular;

export const selectPopularIds = (state) => 
   selectPopularModuleState(state).ids;

export const selectIsPopularLoading = (state) => 
   selectPopularModuleState(state).isLoading;

export const selectIsPopularError = (state) =>
   selectPopularModuleState(state).error;
   
export const selectPopularById = (state, payload) =>
   selectPopularModuleState(state).entities[payload];      