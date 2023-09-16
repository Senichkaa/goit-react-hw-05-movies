import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieRequest } from 'components/fetch-api';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { Loader } from 'components/Loader/Loader';

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
      <div>
        <SearchMovieForm onChange={updateQuery}></SearchMovieForm>
      </div>
      {loader && <Loader />}
      {query !== null ? (
        query.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ form: location }}>
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

export default Movies;
