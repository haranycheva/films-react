import { createSlice } from "@reduxjs/toolkit";
import { getFilm, getFilmGenres, getFilmsByGenre, getMostPopularFilm, getPopularFilms } from "fetch";

// const stateSlice = createSlice({
//   name: "appState",
//   initialState: { isLoading: false, error: null },
//   reducers: {
//     loading(state) {
//       state.isLoading = !state.isLoading;
//     },
//     makeError(state, action) {
//       state.error = action.payload;
//     },
//   },
// });

const reducerTemplate = (propName) => {
  return (state, action) => {
    state.films[propName] = action.payload;
  }
}

const stateSlice = createSlice({
  name: "appState",
  initialState: {
    films: {
      mostPopularOne: null,
      mostPopular: [],
      genres: [],
      filmsByGenres: [],
      film: null,
    },
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMostPopularFilm.fulfilled, reducerTemplate("mostPopularOne"))
      .addCase(getPopularFilms.fulfilled, reducerTemplate("mostPopular"))
      .addCase(getFilmGenres.fulfilled, reducerTemplate("genres"))
      .addCase(getFilmsByGenre.fulfilled, reducerTemplate("filmsByGenres"))
      .addCase(getFilm.fulfilled, reducerTemplate("film"))
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      ),
});
export const { loading, makeError } = stateSlice.actions;

export const rootReducer = stateSlice.reducer;
