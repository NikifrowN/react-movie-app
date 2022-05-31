import { createSlice } from "@reduxjs/toolkit";

export const searchedSlice = createSlice({
  name: "searched",
  initialState: {
    entities: {},
    ids: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    clear: () => searchedSlice.getInitialState(),
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
