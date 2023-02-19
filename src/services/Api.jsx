const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e0f7258397e08a39ddd2202708092bf4';

async function getTrending() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error("Oops, something went wrong... We can't load trending movies :(")
  );
}

async function getMovieById(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error(
      'We are sorry, but we did not find any information about movie :('
    )
  );
}

async function getMovieCast(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error('We are sorry, but we did not find any information about cast :(')
  );
}

async function getMovieReviews(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error('We do not have any reviews for this movie :(')
  );
}

async function getMovieByQuery(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  if (response.ok) {
    return await response.json();
  }
  return await Promise.reject(
    new Error(`No results containing ${query} were found.`)
  );
}

export {
  getTrending,
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovieByQuery,
};
