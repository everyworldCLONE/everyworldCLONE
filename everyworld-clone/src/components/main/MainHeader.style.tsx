import styled from 'styled-components';

export const Container = styled.div`
  color: white;
`;

export const MainHeader = styled.div`
  max-width: 1480px;
  height: 690px;
`;

export const Description = styled.div`
  color: #c408ff;
  position: absolute;
  top: 350px;
  p {
    font-size: 200px;
    font-weight: 330;
    margin: 0;
    line-height: 200px;
  }
  p:first-child {
    font-weight: 600;
  }
`;
export const MainHeaderImageDiv = styled.div`
  margin-left: 40%;
  width: 730px;
  height: 650px;
`;
export const MainHeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
