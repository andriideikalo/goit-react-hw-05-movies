import PropTypes from 'prop-types';
import * as styl from './MovieList.styled';

export const MovieList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, title }) => (
        <li key={id}>
          <styl.Item to={`/movies/${id}`}>
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
