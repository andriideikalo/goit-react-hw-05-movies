import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 8px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 32px) / 5);
`;

const Item = styled(NavLink)`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    transform: scale(1.1);
    color: #ec9706;
  }
`;

const Poster = styled.img`
  height: 365px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 12px 4px;
`;

export { List, ListItem, Item, Poster, MovieInfo };
