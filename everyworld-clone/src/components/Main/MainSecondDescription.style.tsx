import styled from 'styled-components';
import { font, theme } from '../../globalLayout/GlobalStyle';
export const Container = styled.div`
  display: flex;
`;

// 세일정보 박스
export const SaleInformationsBox = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  p {
    color: ${theme.color.purple};
    font-family: ${font.fontFamily};
    font-size: 140px;
    margin: 0;
  }
`;
