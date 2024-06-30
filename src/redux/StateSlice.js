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
      .addCase(getMostPopularFilm.fulfilled, (state, action) => {
        state.films.mostPopularOne = action.payload;
      })
      .addCase(getPopularFilms.fulfilled, (state, action) => {
        state.films.mostPopular = action.payload;
      })
      .addCase(getFilmGenres.fulfilled, (state, action) => {
        state.films.genres = action.payload;
      })
      .addCase(getFilmsByGenre.fulfilled, (state, action) => {
        state.films.filmsByGenres = action.payload;
      })
      .addCase(getFilm.fulfilled, (state, action) => {
        state.films.film = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          console.log("pending");
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          console.log("rejected");
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          console.log("fulfilled");
          state.isLoading = false;
        }
      ),
});
export const { loading, makeError } = stateSlice.actions;

export const rootReducer = stateSlice.reducer;
