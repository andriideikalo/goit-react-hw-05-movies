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
      {status === Status.RESOLVED && (
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
    </>
  );
};

export default Cast;
