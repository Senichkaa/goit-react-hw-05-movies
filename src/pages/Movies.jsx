import { useLocation, useSearchParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieRequest } from 'components/fetch-api';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { Loader } from 'components/Loader/Loader';

import { Loading, TrendsWrapper } from './Home.styled';
import { MovieLi, ReactLink, SearchFormWrapper } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);

  const movie = searchParams.get('film') ?? '';
  const location = useLocation();

  useEffect(() => {
    setLoader(true);
    const fetching = async () => {
      try {
        const resp = await searchMovieRequest(movie);
        setQuery(resp.results);
      } catch (error) {
        console.error('There is an error', error);
      } finally {
        setLoader(false);
      }
    };

    fetching();
  }, [movie]);

  const updateQuery = film => {
    if (film === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ film: film });
    }
  };

  return (
    <div>
      <SearchFormWrapper>
        <SearchMovieForm onChange={updateQuery}></SearchMovieForm>
      </SearchFormWrapper>
      <TrendsWrapper>
        {loader && <Loader />}
        {query !== null ? (
          query.map(({ id, title }) => (
            <MovieLi key={id}>
              <ReactLink to={`${id}`} state={{ form: location }}>
                {title}
              </ReactLink>
            </MovieLi>
          ))
        ) : (
          <Loading>Loading...</Loading>
        )}
      </TrendsWrapper>
    </div>
  );
};

export default Movies;
