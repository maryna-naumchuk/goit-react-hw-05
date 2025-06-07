import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api-tmdb';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Trending now</h1>
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isError && <ErrorMessage />}
    </>
  );
}