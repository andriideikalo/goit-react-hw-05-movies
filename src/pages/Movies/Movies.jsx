import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { BsSearch, BsFillEmojiFrownFill } from 'react-icons/bs';
import { getMovieByQuery } from 'services/Api';
import { MovieList } from 'components/MovieList';

import {
  Section,
  Container,
  Form,
  Field,
  Label,
  Input,
  Button,
} from './Movies.styled';

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
      .catch(error => {
        setStatus(Status.REJECTED);
      });
  }, [queryParam]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const searchQuery = query.trim().toLowerCase();

    if (!searchQuery) {
      toast.error('Search box cannot be empty. Please enter the word.', {
        icon: <BsFillEmojiFrownFill size={36} fill="#ec9706" />,
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#494545',
        },
      });
      return;
    }
    setSearchParams({ query: searchQuery });

    setQuery('');
  };

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <Section>
        <Container>
          <Form onSubmit={submitHandler}>
            <Field>
              <Input
                type="text"
                name="query"
                value={query}
                autoComplete="off"
                placeholder=" "
                onChange={handleChange}
              />
              <Label>Search movies</Label>
            </Field>
            <Button type="submit">
              <BsSearch size={24} />
            </Button>
          </Form>
          {status === Status.RESOLVED && <MovieList items={movies} />}
        </Container>
      </Section>
    </main>
  );
};

export default Movies;
