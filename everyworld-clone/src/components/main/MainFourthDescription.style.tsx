import styled from 'styled-components';
import { theme } from '../../globalLayout/GlobalStyle';

export const Container = styled.div`
  display: flex;
  margin-top: 140px;
  height: auto;
  width: 100%;
  gap: 40px;
`;

export const LeftDiv = styled.div`
  width: 30%;
`;

export const RightDiv = styled.div`
  width: 100%;
`;

export const Text = styled.div`
  p {
    font-size: 140px;
    color: ${theme.color.purple};
    margin: 0;
  }
`;
export const Paragraph = styled.div`
  width: 70%;
  p {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ArrowButton = styled.div`
  width: 150px;
  height: 150px;
`;
