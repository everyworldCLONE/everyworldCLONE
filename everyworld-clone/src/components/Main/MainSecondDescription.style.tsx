import styled from 'styled-components';
import { font, theme } from '../../globalLayout/GlobalStyle';
export const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`;

// 세일정보 박스
export const SaleInformationsBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${theme.color.purple};
    font-family: ${font.fontFamily};
    font-size: 140px;
    margin: 0;
  }
`;

export const Text = styled.div`
  margin-top: 40px;
  p {
    color: white;
    font-size: 20px;
  }
`;
