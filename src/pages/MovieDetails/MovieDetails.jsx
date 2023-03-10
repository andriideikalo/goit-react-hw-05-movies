import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { GiNothingToSay } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';
import { getMovieById } from 'services/Api';
import * as styl from './MovieDetails.styled';
import Notiflix from 'notiflix';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(movieInfo => {
        if (!Object.keys(movieInfo).length) {
          return;
        }
        setMovie(movieInfo);
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

  const Budget = () => {
    return movie.budget.toLocaleString();
  };
  const Revenue = () => {
    return movie.revenue.toLocaleString();
  };
  return (
    <main>
      <styl.Section>
        <styl.Container>
          <styl.NavItem to={backLinkHref}>
            <TiArrowBack size={24} />
            <span>BACK</span>
          </styl.NavItem>

          {movie && (
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
                  <styl.ManyWrapper>
                    <p>
                      <b>Budget</b>
                    </p>
                    <div>${Budget()}</div>
                    <p>
                      <b>Revenue</b>
                    </p>
                    <div>${Revenue()}</div>
                  </styl.ManyWrapper>

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
                      <RiTeamLine size={24} />
                      <span>Cast</span>
                    </styl.NavItem>
                  </li>
                  <li>
                    <styl.NavItem to="reviews" state={{ from: backLinkHref }}>
                      <GiNothingToSay size={24} />
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
