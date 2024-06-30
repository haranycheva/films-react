export const selectLoading = (state) => state.isLoading;
export const selectError = (state) => state.error;
export const selectMostPopularFilm = (state) => state.films.mostPopularOne;
export const selectMostPopular = (state) => state.films.mostPopular;
export const selectGenres = (state) => state.films.genres;
export const selectFilmsByGenres = (state) => state.films.filmsByGenres;
export const selectFilm = (state) => state.films.film;
