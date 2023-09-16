import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { movieDetailsRequest } from 'components/fetch-api';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

import { Loading } from './Home.styled';
import {
  DetailsWrapper,
  BackButton,
  InfoWrapper,
  MainDetails,
  AddInfo,
  Overview,
  Genres,
} from './MovieDetails.styled';

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
    <InfoWrapper>
      <BackButton to={backLink.current}>Back</BackButton>
      {loader && <Loader />}
      {query && (
        <DetailsWrapper>
          {query.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${query.poster_path}`}
              alt={query.title}
              width={300}
            />
          )}
          <div>
            <MainDetails>{query.title}</MainDetails>
            <MainDetails>
              Rating: {Math.round(query.vote_average * 10)}%
            </MainDetails>
            <AddInfo>Overview</AddInfo>
            <Overview>{query.overview}</Overview>
            <AddInfo>Genres</AddInfo>
            <Genres>{query.genres.map(genre => genre.name).join(', ')}</Genres>
          </div>
        </DetailsWrapper>
      )}
      <DetailsWrapper>
        <MainDetails>Additional</MainDetails>
        <MovieInfo />
      </DetailsWrapper>
      <Suspense fallback={<Loading>Loading</Loading>}>
        <Outlet />
      </Suspense>
    </InfoWrapper>
  );
};

export default MovieDetails;
