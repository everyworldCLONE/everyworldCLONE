import styled from 'styled-components';
import { slideUp } from '../../globalLayout/GlobalStyle';

export const Container = styled.div`
  margin-top: 80px;
  color: white;
  animation: ${slideUp} 0.5s ease-in-out;
`;

export const MainHeaderText = styled.div`
  padding: 80px 0;
  span {
    text-align: center;
    font-size: 1.8rem;
  }
  span > p {
  }
`;
