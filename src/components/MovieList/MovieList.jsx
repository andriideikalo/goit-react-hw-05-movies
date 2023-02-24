import PropTypes from 'prop-types';
import * as styl from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <styl.Wraper>
      {items.map(({ id, title, backdrop_path }) => (
        <styl.List key={id}>
          <styl.Item to={`/movies/${id}`} state={{ from: location }}>
            <styl.Name>{title}</styl.Name>
            <img
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                  : 'https://svgsilh.com/svg/2153523-9e9e9e.svg'
              }
              alt={'name'}
            />
          </styl.Item>
        </styl.List>
      ))}
    </styl.Wraper>
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
