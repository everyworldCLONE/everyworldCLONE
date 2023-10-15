import React from 'react';
import * as S from './MainHeader.style';
interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const MainHeader = (props: propsType) => {
  return (
    <>
      <S.Container>
        <S.MainHeader>
          <S.Description>
            <p>{props.data?.title[0]}</p>
            <p>{props.data?.title[1]}</p>
            <p>{props.data?.title[2]}</p>
          </S.Description>
          <S.MainHeaderImageDiv>
            <S.MainHeaderImage src={props.data?.img[0]}></S.MainHeaderImage>
          </S.MainHeaderImageDiv>
        </S.MainHeader>
      </S.Container>
    </>
  );
};

export default MainHeader;
