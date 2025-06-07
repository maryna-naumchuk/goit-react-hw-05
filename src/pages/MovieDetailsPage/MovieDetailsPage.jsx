import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../api-tmdb';
import clsx from 'clsx';
import GoBack from '../../components/GoBack/GoBack';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const goBackLink = useRef(location.state);

  const biuldLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  useEffect(() => {
    async function getMovie() {
      try {
        setIsError(false);
        setIsLoading(true);

        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <>
      <GoBack to={goBackLink.current ?? '/movies'} />
      {movie && <MovieInfo movie={movie} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={biuldLinkClass} to="cast">
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={biuldLinkClass} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense
        fallback={<div className={css.loadingPage}>Loading subpage...</div>}
      >
        <Outlet />
      </Suspense>
    </>
  );
}