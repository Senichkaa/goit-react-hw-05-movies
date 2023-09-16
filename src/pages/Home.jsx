import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { trendingRequest } from 'components/fetch-api';
import { Link } from 'react-router-dom';

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
    <div>
      <div>
        <h1>Trends</h1>
      </div>

      {loader && <Loader />}
      {images !== null ? (
        images.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ form: location }}>
              {title}
            </Link>
          </li>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Home;
