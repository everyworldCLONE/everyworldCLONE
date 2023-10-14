import styled from 'styled-components';

export const CardWrap = styled.div`
  width: 195px;
  overflow: hidden;
  border: 1px solid white;
  border-radius: 0.25rem;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 195px;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 60px;
  font-size: 12px;
  color: white;
  background-color: black;
  h1 {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;
