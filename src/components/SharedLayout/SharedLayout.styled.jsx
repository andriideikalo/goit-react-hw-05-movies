import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  padding-top: 16px;
  padding-bottom: 16px;

  text-transform: capitalize;

  border-bottom: 4px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    border-color: #ec9706;
    border-radius: 2px;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ec9706;
  }
`;

export { Container, Navigation, NavItem };
