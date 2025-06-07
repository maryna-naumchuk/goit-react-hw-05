import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api-tmdb';
import MovieCastList from '../MovieCastList/MovieCastList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NoData from '../NoData/NoData';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const castData = await fetchMovieCast(movieId);
        setCast(castData.cast);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {cast.length > 0 && (
        <div className={css.container}>
          <h2 className={css.title}>Top cast</h2>
          <MovieCastList cast={cast} />
        </div>
      )}
      {cast.length === 0 && !isLoading && <NoData />}
    </>
  );
}