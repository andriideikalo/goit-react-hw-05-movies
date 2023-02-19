import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { List, ListItem, Item, Poster, MovieInfo } from './MovieList.styled';

export const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <List>
      {items.map(({ id, poster_path, title }) => (
        <ListItem key={id}>
          <Item to={`/movies/${id}`} state={{ from: location }}>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <MovieInfo>
              <p>{title}</p>
            </MovieInfo>
          </Item>
        </ListItem>
      ))}
    </List>
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
