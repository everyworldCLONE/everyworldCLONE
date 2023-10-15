import React from 'react';
import * as S from './ListCard.style';

interface propsType {
  NFT: {
    nftUrl: string;
    name: string;
  };
}

const ListCard = (props: propsType) => {
  return (
    <S.CardWrap>
      <S.CardImg src={props.NFT.nftUrl} />
      <S.CardTitle>
        <h1>{props.NFT.name}</h1>
      </S.CardTitle>
    </S.CardWrap>
  );
};

export default ListCard;
