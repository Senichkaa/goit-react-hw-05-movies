import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { movieDetailsRequest } from 'components/fetch-api';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [query, setQuery] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = useRef(location.state?.form ?? '/movies');

  useEffect(() => {
    setLoader(true);

    const fetching = async () => {
      try {
        const resp = await movieDetailsRequest(movieId);
        setQuery(resp);
      } catch (error) {
        console.error('There is an error', error);
      } finally {
        setLoader(false);
      }
    };

    fetching();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current}>Back</Link>
      {loader && <Loader />}
      {query && (
        <div>
          {query.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${query.poster_path}`}
              alt={query.title}
              width={300}
            />
          )}
          <div>
            <h2>{query.title}</h2>
            <h2>Score: {Math.round(query.vote_average * 10)}%</h2>
            <h3>Overview</h3>
            <p>{query.overview}</p>
            <h3>Genres</h3>
            <p>{query.genres.map(genre => genre.name).join(',')}</p>
          </div>
        </div>
      )}
      <div>
        <h2>Additional</h2>
        <MovieInfo></MovieInfo>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
