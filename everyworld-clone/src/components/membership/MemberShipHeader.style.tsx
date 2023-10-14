import styled from 'styled-components';
import { theme } from '../../globalLayout/GlobalStyle';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const PositionRelative = styled.div`
  position: relative;
`;

export const TitleText = styled.div`
  position: absolute;
  top: 100px;
  font-size: 200px;
  color: ${theme.color.purple};
  p {
    margin: 0;
    line-height: 190px;
  }
  p: nth-child(3) {
    font-weight: bold;
  }
`;

export const ImageDiv = styled.div`
  width: 861px;
  height: 567px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
