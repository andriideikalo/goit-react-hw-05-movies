import { Outlet } from 'react-router-dom';
import { TbHome, TbMovie } from 'react-icons/tb';
import * as styl from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <styl.Container>
        <styl.Navigation>
          <styl.NavItem to="/">
            <TbHome size={24} />
            <span>Home</span>
          </styl.NavItem>
          <styl.NavItem to="movies">
            <TbMovie size={24} />
            <span>Movies</span>
          </styl.NavItem>
        </styl.Navigation>
      </styl.Container>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
