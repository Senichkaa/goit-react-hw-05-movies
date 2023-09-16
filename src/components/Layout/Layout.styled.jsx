import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 28px;
  padding: 30px 30px;
  color: #000;
  text-decoration: none;
`;

export const StyledNavi = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  /* margin-bottom: 15px; */
  background-color: #dcdcdc;
`;

export const Header = styled.header`
  border: 3px solid #833131;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 9px;
`;
