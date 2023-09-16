import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailsWrapper = styled.div`
  padding-top: 35px;
`;

export const BackButton = styled(Link)`
  padding: 10px 20px;
  background-color: #b8b6b6;
  border: 1px solid #000;
  text-decoration: none;
  color: black;

  :hover {
    background-color: #a5a4a4;
  }
`;

export const InfoWrapper = styled.div`
  padding-top: 35px;
  padding-left: 15px;

  background-color: #dcdcdc;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border: 3px solid #833131;
  border-radius: 9px;
`;

export const MainDetails = styled.h2`
  font-size: 28px;
  color: #4e4d4d;
`;

export const AddInfo = styled.h3`
  font-size: 22px;
  color: #4e4d4d;
`;

export const Overview = styled.p`
  width: 600px;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 1.3;
  font-weight: 500;
  color: #4e4d4d;
`;

export const Genres = styled.p`
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 1.3;
  font-weight: 500;
  color: #4e4d4d;
`;
