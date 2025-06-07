import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDBhNGE5NDYwNzA5NGU1YTg0N2YzYTI0M2Q2MjQwMCIsIm5iZiI6MTc0ODc5MjMxOC41Niwic3ViIjoiNjgzYzczZmViMzAzMDZmNjU3ZjJiMWJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.n12f82c2RJFHSTSKKsTlmFvyM30MJuokxn_aigswmyI';

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return resp.data.results;
};

export const fetchMovieDetails = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return resp.data;
};

export const fetchMovieCast = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return resp.data;
};

export const fetchMovieReviews = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return resp.data;
};

export const fetchSearchMovie = async (query, page) => {
  const params = {
    query: query,
    page: page,
    include_adult: false,
    language: 'en-US',
  };

  const resp = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params,
    ...options,
  });

  return resp.data;
};