import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsRequest } from 'components/fetch-api';
import { Loader } from 'components/Loader/Loader';

import { ReviewLi, ReviewInfo, ReviewAuthor, SorryP } from './Reviews.styled';

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
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => {
          return (
            <ReviewLi key={id}>
              <ReviewAuthor>Author: {author}</ReviewAuthor>
              <ReviewInfo>{content}</ReviewInfo>
            </ReviewLi>
          );
        })
      ) : (
        <SorryP>Sorry, we do not have any information about it :/ </SorryP>
      )}
    </div>
  );
};

export default Reviews;
