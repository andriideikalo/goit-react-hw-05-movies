import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import * as styl from './Cast.styled';
import Notiflix from 'notiflix';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
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
  }, [movieId]);

  return (
    <>
      {status === Status.RESOLVED && (
        <styl.List>
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <styl.Character>Character: {character}</styl.Character>
            </li>
          ))}
        </styl.List>
      )}
    </>
  );
};

export default Cast;
