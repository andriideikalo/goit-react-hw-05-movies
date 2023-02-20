import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import * as styl from './Cast.styled';
import Notiflix from 'notiflix';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(function (error) {
        if (error.response) {
          Notiflix.Notify.warning(error.response.data);
          // console.log(error.response.data);
        } else if (error.request) {
          Notiflix.Notify.warning('Request failed');
          // console.log(error.request);
        } else {
          Notiflix.Notify.warning('Error', error.message);
          // console.log(error.message);
        }
      })
      .finally();
  }, [movieId]);

  return (
    <>
      {cast && (
        <styl.List>
          {cast.map(({ id, character, name, profile_path }) => (
            <styl.Item key={id}>
              <styl.Img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <styl.NameCast>{name}</styl.NameCast>
              <styl.Character>Character: {character}</styl.Character>
            </styl.Item>
          ))}
        </styl.List>
      )}
      {!cast &&
        Notiflix.Notify.warning(
          'Sorry. There is no list of actors for this film.('
        )}
    </>
  );
};

export default Cast;
