import React from 'react';
import { Suspense } from 'react';
// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { StyledNavLink, StyledNavi, Header } from './Layout.styled';
import { Loading } from '../../pages/Home.styled';
export const Layout = () => {
  return (
    <div>
      <Header>
        <StyledNavi>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNavi>
      </Header>
      <main>
        <Suspense fallback={<Loading>Loading</Loading>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
