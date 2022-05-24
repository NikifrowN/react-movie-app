import { createSlice } from "@reduxjs/toolkit";

export const popularSlice = createSlice({
  name: "popular",
  initialState: {
    entities: {},
    ids: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state, { payload }) => {
      state.isLoading = false;
      
      state.entities = {
        ...state.entities,
        ...payload.reduce((acc, entity) => {
          acc[entity.id] = entity;
          return acc;
        }, {}),
      };
      state.ids = Object.keys(state.entities);
    },
  },
});
