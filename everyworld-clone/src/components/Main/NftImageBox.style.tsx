import styled from 'styled-components';

//NFT그림상자
export const NftImageBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  height: 50%;
  width: 100%;
`;

export const NftImage = styled.img`
  width: 100%;
`;
