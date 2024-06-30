import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = {
  api_key: "6c0c9499c673661997a5615da330020f",
};

export const getMostPopularFilm = createAsyncThunk(
  "films/getMostPopularFilm",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/3/discover/movie`);
      return res.data.results[0];
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getPopularFilms = createAsyncThunk(
  "films/getPopularFilms",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/3/discover/movie`);
      res.data.results.shift();
      return res.data.results;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getFilmGenres = createAsyncThunk(
  "films/getFilmGenres",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`/3/genre/movie/list`);
      return res.data.genres;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


export const getFilmsByGenre = createAsyncThunk(
  "films/getFilmsByGenre",
  async (genreId, thunkApi) => {
    try {
      const res = await axios.get(`/3/discover/movie?with_genres=${genreId}`);
      return res.data.results;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

// export async function getFilm(filmId) {
//   const res = await axios.get(`3/movie/${filmId}`);
//   return res.data;
// }

export const getFilm = createAsyncThunk(
  "films/getFilm",
  async (filmId, thunkApi) => {
    try {
      const res = await axios.get(`3/movie/${filmId}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
