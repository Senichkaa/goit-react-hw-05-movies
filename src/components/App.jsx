import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { lazy } from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Casting from '../components/Casting/Casting';
// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Casting />} />
        </Route>
      </Route>
    </Routes>
  );
};
