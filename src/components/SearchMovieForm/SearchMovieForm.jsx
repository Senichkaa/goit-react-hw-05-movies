import { useState } from 'react';

export const SearchMovieForm = ({ onChange }) => {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!movieName.trim()) {
      return window.alert('Enter a valid query in search bar!');
    }
    onChange(movieName);
    setMovieName('');
  };

  const updateQuery = event => {
    if (event.target.value === '') {
      return setMovieName({});
    } else {
      setMovieName(event.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your movie"
        value={movieName}
        name="query"
        onChange={updateQuery}
      />
      <button type="submit">Search</button>
    </form>
  );
};
