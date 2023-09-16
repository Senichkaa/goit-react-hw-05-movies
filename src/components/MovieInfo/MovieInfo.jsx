import { AdditionalLink, AdditionalLi } from './MovieInfo.styled';
export const MovieInfo = () => {
  return (
    <ul>
      <AdditionalLi>
        <AdditionalLink to="cast">Cast</AdditionalLink>
      </AdditionalLi>
      <AdditionalLi>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
      </AdditionalLi>
    </ul>
  );
};
