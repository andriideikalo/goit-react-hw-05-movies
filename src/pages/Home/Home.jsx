import { useState, useEffect } from 'react';
import { getTrending } from '../../services/Api';
import { MovieList } from 'components/MovieList';
import * as styl from './Home.styled';
import Notiflix from 'notiflix';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(({ results }) => {
        if (!results.length) {
          return;
        }
        setMovies(results);
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
  }, []);

  return (
    <main>
      <styl.Section>
        <styl.Container>
          <styl.Heading>Trends of the week</styl.Heading>
          {movies && <MovieList items={movies} />}
        </styl.Container>
      </styl.Section>
    </main>
  );
};

export default Home;
