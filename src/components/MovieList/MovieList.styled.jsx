import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  display: block;
  margin: 0 auto;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: orange;
  }
`;
export const Name = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Wraper = styled.ul`
  display: grid;
  grid: repeat(7, 140px) / auto-flow 300px;
  grid-gap: 100px;
`;
export const List = styled.li`
  margin-bottom: 0;
  display: grid;
  text-align: center;
`;
export const Img = styled.img`
  width: 140px;
  height: 140px;
  display: grid;
`;
