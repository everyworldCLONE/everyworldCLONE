import React from 'react';
import * as S from './ListCard.style';

interface propsType {
  NFT: {
    id: number;
    name: string;
    img: string;
  };
}

const ListCard = (props: propsType) => {
  return (
    <S.CardWrap>
      <S.CardImg src={props.NFT.img} />
      <S.CardTitle>
        <h1>{props.NFT.name}</h1>
      </S.CardTitle>
    </S.CardWrap>
  );
};

export default ListCard;
