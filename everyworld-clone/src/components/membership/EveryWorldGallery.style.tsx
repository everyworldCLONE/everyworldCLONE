import styled from 'styled-components';
import { theme } from '../../globalLayout/GlobalStyle';

export const Container = styled.div``;

export const TextDiv = styled.div`
  text-align: center;
  color: ${theme.color.purple};
  font-size: 100px;
  font-weight: 300;
  line-height: 90px;
  p {
    margin: 0;
  }
  p:nth-child(2) {
    font-weight: bold;
  }
`;

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 80px;
`;

export const GalleryImage = styled.div`
  width: 100%;
`;
