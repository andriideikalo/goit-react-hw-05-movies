import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { getMovieByQuery } from 'services/Api';
import { MovieList } from 'components/MovieList';
import Notiflix from 'notiflix';

import * as styl from './Movies.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (!queryParam) {
      return;
    }
    setStatus(Status.PENDING);
    getMovieByQuery(queryParam)
      .then(({ results }) => {
        if (!results.length) {
          setStatus(Status.REJECTED);
          return;
        }
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(function (error) {
        if (error.response) {
          Notiflix.Notify.warning(error.response.data);
        } else if (error.request) {
          Notiflix.Notify.warning('Request failed');
        } else {
          Notiflix.Notify.warning('Error', error.message);
        }
      })
      .finally();
  }, [queryParam]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const searchQuery = query.trim().toLowerCase();

    if (!searchQuery) {
      Notiflix.Notify.warning(
        'Search box cannot be empty. Please enter the word.'
      );
      return;
    }
    setSearchParams({ query: searchQuery });

    setQuery('');
  };

  return (
    <main>
      <styl.Section>
        <styl.Container>
          <styl.Form onSubmit={submitHandler}>
            <styl.Field>
              <styl.Input
                type="text"
                name="query"
                value={query}
                autoComplete="off"
                placeholder=" "
                onChange={handleChange}
              />
              <styl.Label>Search movies</styl.Label>
            </styl.Field>
            <styl.Button type="submit">
              <BsSearch size={24} />
            </styl.Button>
          </styl.Form>
          {status === Status.RESOLVED && <MovieList items={movies} />}
        </styl.Container>
      </styl.Section>
    </main>
  );
};

export default Movies;
