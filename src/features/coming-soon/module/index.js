import { createSlice } from "@reduxjs/toolkit";

export const comingSoonSlice = createSlice({
  name: "comingSoon",
  initialState: {
    entities: {},
    ids: [],
    isLoading: false,
    error: null,
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
