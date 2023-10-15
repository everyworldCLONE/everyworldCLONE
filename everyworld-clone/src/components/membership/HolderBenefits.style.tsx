import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-size: 26px;
`;

export const BenefitCardSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(0, 1fr);
  gap: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 10px;
  border-radius: 10px;
`;

export const CardImageDiv = styled.div`
  width: 40%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  img {
    border-radius: 10px 0 0 10px;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
  }
`;

export const CardTextDiv = styled.div`
  width: 60%;

  padding: 32px;
`;
