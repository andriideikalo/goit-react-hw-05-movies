import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  /* margin-left: auto;
  margin-right: auto; */
  width: 1280px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 32px;
  color: #494545;
  margin-top: 24px;
  margin-bottom: 24px;

  img {
    width: 268px;
  }
  p {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 36px;

  font-size: 42px;
`;
export const GenreWrapper = styled.p`
  display: flex;
  gap: 12px;
`;

export const Genre = styled.span`
  padding: 4px 12px;
  color: #494545;
  font-size: 16px;
  line-height: 1.4;
`;

export const AdditionalInfo = styled.div`
  margin-bottom: 24px;
  h2 {
    margin-bottom: 24px;
    color: #494545;

    font-size: 36px;
  }
  ul {
    display: flex;
    gap: 16px;
    color: #494545;
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding-top: 8px;
  padding-bottom: 8px;

  text-transform: capitalize;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ec9706;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ec9706;
  }
`;
