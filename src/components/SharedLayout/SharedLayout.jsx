import { Outlet } from 'react-router-dom';
import { TbHome, TbMovie } from 'react-icons/tb';
import { Container, Navigation, NavItem } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Navigation>
          <NavItem to="/">
            <TbHome size={24} />
            <span>Home</span>
          </NavItem>
          <NavItem to="movies">
            <TbMovie size={24} />
            <span>Movies</span>
          </NavItem>
        </Navigation>
      </Container>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
