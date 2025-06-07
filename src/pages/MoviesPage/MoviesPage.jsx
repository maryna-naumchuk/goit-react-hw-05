import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../api-tmdb';
import toast, { Toaster } from 'react-hot-toast';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import NoData from '../../components/NoData/NoData';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noData, setNoData] = useState(false);
  const [endCollection, setEndCollection] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';
  const page = Number(searchParams.get('page') ?? '1');

  const onSubmitForm = text => {
    setMovies([]);
    setEndCollection(false);

    const nextParams = new URLSearchParams(searchParams);

    if (text !== '') {
      nextParams.set('query', text);
      nextParams.set('page', 1);
    } else {
      nextParams.delete('query');
      nextParams.delete('page');
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const asyncWrap = async () => {
      try {
        setNoData(false);
        setIsError(false);
        setIsLoading(true);

        const data = await fetchSearchMovie(searchQuery, page);

        if (data.total_results === 0) setNoData(true);

        if (data.total_pages === page) {
          toast('This is all movies for you request!', {
            icon: '🎭',
          });
          setEndCollection(true);
        }

        setMovies(prevMovies =>
          page === 1 ? data.results : [...prevMovies, ...data.results]
        );
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrap();
  }, [searchQuery, page]);

  const loadMore = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('page', (page + 1).toString());
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {noData && <NoData />}
      {movies.length > 0 && !isLoading && !endCollection && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      <Toaster />
    </>
  );
}