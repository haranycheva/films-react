import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.params = {
  api_key: "6c0c9499c673661997a5615da330020f",
};

export async function getMostPopularFilm(){
    const res = await axios.get(`/3/discover/movie`); 
    return res.data.results[0]; 
}
