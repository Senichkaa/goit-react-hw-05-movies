import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { trendingRequest } from 'components/fetch-api';
// import { Link } from 'react-router-dom';

import {
  Trends,
  Loading,
  ReactLink,
  MovieLi,
  TrendsWrapper,
} from './Home.styled';

const Home = () => {
  const [images, setImages] = useState(null);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoader(true);

    const fetching = async () => {
      try {
        const resp = await trendingRequest();
        setImages(resp.results);
      } catch (error) {
        console.error('There is an error', error);
      } finally {
        setLoader(false);
      }
    };

    fetching();
  }, []);

  return (
    <TrendsWrapper>
      <div>
        <Trends>Trends</Trends>
      </div>

      {loader && <Loader />}
      {images !== null ? (
        images.map(({ id, title }) => (
          <MovieLi key={id}>
            <ReactLink to={`movies/${id}`} state={{ form: location }}>
              {title}
            </ReactLink>
          </MovieLi>
        ))
      ) : (
        <Loading>Loading...</Loading>
      )}
    </TrendsWrapper>
  );
};

export default Home;
