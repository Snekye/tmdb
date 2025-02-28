import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getGenres = async () => {
  const { data } = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  return data.genres;
};

export const getMoviesByGenre = async (genreId) => {
  const { data } = await axios.get(`${BASE_URL}/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`);
  return data.results;
};