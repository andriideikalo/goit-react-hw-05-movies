import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as styl from './MovieList.styled';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <styl.List>
      {items.map(({ id, poster_path, title }) => (
        <styl.ListItem key={id}>
          <styl.Item to={`/movies/${id}`} state={{ from: location }}>
            <styl.Poster
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <styl.MovieInfo>
              <p>{title}</p>
            </styl.MovieInfo>
          </styl.Item>
        </styl.ListItem>
      ))}
    </styl.List>
  );
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
