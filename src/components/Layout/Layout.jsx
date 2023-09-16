import React from 'react';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
