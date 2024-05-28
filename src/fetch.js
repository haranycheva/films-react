import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = {
  api_key: "6c0c9499c673661997a5615da330020f",
};

export async function getMostPopularFilm(){
    const res = await axios.get(`/3/discover/movie`); 
    return res.data.results[0]; 
}

export async function getPopularFilms(){
  const res = await axios.get(`/3/discover/movie`); 
  res.data.results.shift()
  return res.data.results; 
}

export async function getFilmGenres(){
  const res = await axios.get(`/3/genre/movie/list`); 
  return res.data.genres; 
}

export async function getFilmsByGenre(genreId){
  const res = await axios.get(`/3/discover/movie?with_genres=${genreId}`); 
  return res.data.results; 
}

export async function getFilm(filmId){
  const res = await axios.get(`3/movie/${filmId}`); 
  return res.data; 
}
