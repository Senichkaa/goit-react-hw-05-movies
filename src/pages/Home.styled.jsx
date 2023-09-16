import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Trends = styled.h1`
  margin-left: 30px;
  color: #4e4d4d;
`;

export const Loading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MovieLi = styled.li`
  margin-left: 5px;
  text-decoration: none;
`;

export const ReactLink = styled(Link)`
  color: #4e4d4d;
  margin-left: 10px;

  font-size: 20px;
  text-decoration: none;
`;

export const TrendsWrapper = styled.div`
  padding: 10px 0 30px 0;
  background-color: #dcdcdc;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border: 3px solid #833131;
  border-radius: 9px;
`;
