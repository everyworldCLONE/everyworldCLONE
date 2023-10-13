import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  padding-left: 100px;
  padding-right: 100px;
`;

export const MainHeader = styled.div`
  max-width: 1480px;
  height: 690px;
`;

export const Description = styled.div`
  color: #c408ff;
  position: absolute;
  bottom: -80px;
  p {
    font-size: 200px;
    font-weight: 300;
    margin: 0;
    line-height: 200px;
  }
  p:first-child {
    font-weight: bold;
  }
`;
export const MainHeaderImageDiv = styled.div`
  margin-left: 50%;
`;
export const MainHeaderImage = styled.img`
  width: 730px;
  height: 650;
`;
