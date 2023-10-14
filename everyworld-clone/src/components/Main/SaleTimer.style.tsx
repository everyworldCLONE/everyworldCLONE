import styled from 'styled-components';
import { theme } from '../../globalLayout/GlobalStyle';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c408ff;
  padding: 40px 24px;
  border-radius: 5px;
  h3 {
    font-size: 2rem;
  }
`;

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  column-gap: 14px;
  margin-top: 2rem;
`;

export const DivFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    background-color: #f3cdff;
    color: ${theme.color.purple};
    padding: 1rem 0;
  }
  div:nth-child(2) {
    margin-top: 8px;
  }
`;

export const SaleGobutton = styled.div`
  width: 100%;
  grid-column: span 2 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  background-color: white;
  &:hover {
  }
  a {
    width: 100%;
    text-align: center;
  }
`;
