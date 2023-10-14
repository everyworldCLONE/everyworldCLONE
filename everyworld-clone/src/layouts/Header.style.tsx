import styled from 'styled-components';
import { font } from '../globalLayout/GlobalStyle';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1480px;
  margin: auto;
  padding-left: 100px;
  padding-right: 100px;
  font-family: ${font.fontFamily};
  color: white;

  padding-top: 3rem;
  padding-bottom: 3rem;
`;
export const Logo = styled.img`
  box-sizing: border-box;
  width: 204px;
`;
export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
`;

export const HeaderNavItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 48px;
  &:hover {
    border-bottom: 2px solid white;
    font-weight: bold;
    transition: 0.1s;
  }
`;

export const StyleLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit;
  display: flex;
  align-items: center;
  margin-left: 48px;
  &:hover {
    border-bottom: 2px solid white;
    font-weight: bold;
    transition: 0.1s;
  }
`;
