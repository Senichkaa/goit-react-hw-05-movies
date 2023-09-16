import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { movieCastRequest } from 'components/fetch-api';

const Casting = () => {
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);

    const fetching = async () => {
      try {
        const resp = await movieCastRequest(movieId);
        setCast(resp.cast);
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
      {loader && <Loader />}
      {cast &&
        cast.map(({ profile_path, name, id, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
                alt={name}
                width={150}
              />
              <p>{name}</p>
              <p>character: {character}</p>
            </li>
          );
        })}
    </div>
  );
};

export default Casting;
