// приклад запиту
// https://api.themoviedb.org/3/movie/550?api_key=e0f7258397e08a39ddd2202708092bf4

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e0f7258397e08a39ddd2202708092bf4';

async function getTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return await res.json();
}

async function getMovieById(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return await res.json();
}

async function getMovieCast(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return await res.json();
}

async function getMovieReviews(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return await res.json();
}

async function getMovieByQuery(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return await res.json();
}

export {
  getTrending,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovieByQuery,
};
