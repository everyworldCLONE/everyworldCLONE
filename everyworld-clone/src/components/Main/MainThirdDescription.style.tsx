import styled from 'styled-components';
import { theme } from '../../globalLayout/GlobalStyle';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  p {
    font-size: 140px;
    margin: 0;
    color: ${theme.color.purple};
  }
  p:first-child {
    font-weight: bold;
  }
`;

export const Section = styled.div`
  width: 33%;
  p {
    font-size: 20px;
  }
`;

export const MainThirdImageDiv = styled.div`
  img {
    max-width: 100%;
  }
`;

export const BorderBottom = styled.span`
  border-bottom: 1px solid white;
`;

export const RightImage = styled.img`
  position: absolute;
  z-index: -1;
  right: 120px;
  top: 0;
  width: 800px;
`;
