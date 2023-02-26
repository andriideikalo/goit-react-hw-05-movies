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
  font-weight: 500;
  margin-bottom: 8px;
  color: black;
  text-align: center;
`;

export const Wraper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Img = styled.img`
  width: 100%;
`;
