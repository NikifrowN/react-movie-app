export const selectWatchlistModuleState = (state) => state.watchlist;

export const selectWatchilstMovie = (state, payload) => {
  const moduleStateString = JSON.stringify(selectWatchlistModuleState(state));

  return moduleStateString.includes(JSON.stringify(payload.id));
}  

// export const selectFavoriteById = (state, payload) =>
//   selectFavoriteModuleState(state)[payload];