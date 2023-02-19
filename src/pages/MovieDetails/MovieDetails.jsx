import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { IoIosPeople, IoIosPaper, IoIosArrowDropleft } from 'react-icons/io';
import { getMovieById } from 'services/Api';
import * as styl from './MovieDetails.styled';
import Notiflix from 'notiflix';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieById(movieId)
      .then(movieInfo => {
        if (!Object.keys(movieInfo).length) {
          setStatus(Status.REJECTED);
          return;
        }
        setMovie(movieInfo);
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

  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <styl.Section>
        <styl.Container>
          <styl.NavItem to={backLinkHref}>
            <IoIosArrowDropleft size={24} />
            <span>HOME</span>
          </styl.NavItem>

          {status === Status.RESOLVED && (
            <>
              <styl.MovieWrapper>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <styl.Title>
                    {movie.title} ({new Date(movie.release_date).getFullYear()})
                  </styl.Title>
                  <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                  <p>
                    <b>Overview</b>
                  </p>
                  <p>{movie.overview}</p>
                  <p>
                    <b>Genres</b>
                  </p>
                  <styl.GenreWrapper>
                    {movie.genres.map(({ name }) => (
                      <styl.Genre key={name}>{name}</styl.Genre>
                    ))}
                  </styl.GenreWrapper>
                  <p>
                    <b>Budget</b>
                  </p>
                  <div>{movie.budget}</div>
                  <p>
                    <b>Release datet</b>
                  </p>
                  <div>{movie.release_date}</div>
                </div>
              </styl.MovieWrapper>
              <styl.AdditionalInfo>
                <h2>Additional information</h2>
                <ul>
                  <li>
                    <styl.NavItem to="cast" state={{ from: backLinkHref }}>
                      <IoIosPeople size={24} />
                      <span>Cast</span>
                    </styl.NavItem>
                  </li>
                  <li>
                    <styl.NavItem to="reviews" state={{ from: backLinkHref }}>
                      <IoIosPaper size={24} />
                      <span>Reviews</span>
                    </styl.NavItem>
                  </li>
                </ul>
              </styl.AdditionalInfo>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </>
          )}
        </styl.Container>
      </styl.Section>
    </main>
  );
};

export default MovieDetails;
