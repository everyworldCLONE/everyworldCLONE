import React from 'react';
import * as S from './ListCard.style';

interface propsType {
  NFT: string;
}

const ListCard = (props: propsType) => {
  return (
    <S.CardWrap>
      <S.CardImg src={props.NFT} />
      <S.CardTitle>
        <h1>{props.NFT}</h1>
      </S.CardTitle>
    </S.CardWrap>
  );
};

export default ListCard;
