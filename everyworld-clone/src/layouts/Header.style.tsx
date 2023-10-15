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

export const RelativeDiv = styled.div`
  position: relative;
  display: flex;
`;

export const LanguageButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid white;
    transition: 0.1s;
  }
  span {
    margin-left: 1rem;
  }
`;

export const LanguageList = styled.div`
  position: absolute;
  margin-top: 20px;
  padding: 0.5rem;
  background-color: white;
  border-radius: 10px;
  z-index: 999;
  ul {
    display: flex;
    flex-direction: column;
    color: black;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0.7rem;
  }
  ul li {
    font-size: 1.1rem;
    width: 80px;
    text-align: center;
    cursor: pointer;
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
