import styled from 'styled-components';
import { theme } from '../../globalLayout/GlobalStyle';

export const Container = styled.div`
  width: 1480px;
`;

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
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1480px;
  column-gap: 50px;
`;

export const GalleryImage = styled.div`
  width: 100%; // 자식 요소가 부모 너비를 채우도록 설정
  img {
    max-width: 100%; // 이미지가 부모 요소를 넘지 않도록 설정
  }
`;
