import React from 'react';
import * as S from './ListCard.style';
import doubleUp from '../../../assets/aron-solid.png';

const ListCard = () => {
  return (
    <S.CardWrap>
      <S.CardImg src={doubleUp} />
      <S.CardTitle>
        <h1>Double UP</h1>
      </S.CardTitle>
    </S.CardWrap>
  );
};

export default ListCard;
