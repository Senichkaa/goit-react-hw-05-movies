import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsRequest } from 'components/fetch-api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);

    const fetching = async () => {
      try {
        const resp = await movieReviewsRequest(movieId);
        setReviews(resp.results);
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
      {reviews.length >= 0 ? (
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>Sorry, we do not have any information about it</p>
      )}
    </div>
  );
};

export default Reviews;
