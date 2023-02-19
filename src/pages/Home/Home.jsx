import { useState, useEffect } from 'react';
import { getTrending } from '../../services/Api';
import { MovieList } from 'components/MovieList';
import * as styl from './Home.styled';
const Status = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    getTrending()
      .then(({ results }) => {
        if (!results.length) {
          setStatus(Status.REJECTED);
          return;
        }
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        // setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <main>
      <styl.Section>
        <styl.Container>
          <styl.Heading>Trends of the week</styl.Heading>
          {status === Status.RESOLVED && <MovieList items={movies} />}
        </styl.Container>
      </styl.Section>
    </main>
  );
};

export default Home;
