import PropTypes from 'prop-types';
import * as styl from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          <styl.Item to={`/movies/${id}`} state={{ from: location }}>
            <styl.Name>{title}</styl.Name>
          </styl.Item>
        </li>
      ))}
    </ul>
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
