import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
// import { Loader } from 'components/Loader';
// import { Notification } from 'components/Notification';
import { List, Character } from './Cast.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieCast(movieId)
      .then(({ cast }) => {
        if (!cast.length) {
          setError(
            'We are sorry, but we did not find any information about cast :('
          );
          setStatus(Status.REJECTED);
          return;
        }
        setCast(cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  return (
    <>
      {/* {status === Status.PENDING && <Loader />} */}
      {/* {status === Status.REJECTED && <Notification message={error} />} */}
      {status === Status.RESOLVED && (
        <List>
          {cast.map(({ id, character, name, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <Character>Character: {character}</Character>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
