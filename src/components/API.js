// key = e0f7258397e08a39ddd2202708092bf4;

// приклад запиту
//https://api.themoviedb.org/3/movie/550?api_key=e0f7258397e08a39ddd2202708092bf4

//Ключ доступа к API (v4 auth)
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGY3MjU4Mzk3ZTA4YTM5ZGRkMjIwMjcwODA5MmJmNCIsInN1YiI6IjYzZWQyYjA1MWYzZTYwMDA3OWUwMmNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5mEAOCzzhMgYe4Ej0AWizREJMHX-hL3oq5A7BIV8yqA

import axios from 'axios';

const KEY_API = 'e0f7258397e08a39ddd2202708092bf4';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export async function getTrending() {
  return await axios.get(`trending/movie/week?api_key=${KEY_API}`);
}

export async function searchMovie(searchQuery) {
  return await axios.get(
    `search/movie?api_key=${KEY_API}&query=${searchQuery}`
  );
}
export async function getMovieDetails(movie_id) {
  return await axios.get(`movies/${movie_id}?api_key=${KEY_API}`);
}
export async function getMovieCredits(movie_id) {
  return await axios.get(`movies/${movie_id}/credits?api_key=${KEY_API}`);
}
export async function getMovieReviews(movie_id) {
  return await axios.get(`movie/${movie_id}/reviews?api_key=${KEY_API}`);
}
export default getTrending();
