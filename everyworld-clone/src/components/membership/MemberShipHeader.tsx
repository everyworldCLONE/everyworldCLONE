import React from 'react';
import * as S from './MemberShipHeader.style';

interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const MemberShipHeader = (props: propsType) => {
  return (
    <>
      <S.Container>
        <S.PositionRelative>
          <S.TitleText>
            <p>{props.data?.title[0]}</p>
            <p>{props.data?.title[1]}</p>
            <p>{props.data?.title[2]}</p>
          </S.TitleText>
        </S.PositionRelative>

        <S.ImageDiv>
          <S.Image src={props.data?.img[0]} alt="" />
        </S.ImageDiv>
      </S.Container>
    </>
  );
};

export default MemberShipHeader;
