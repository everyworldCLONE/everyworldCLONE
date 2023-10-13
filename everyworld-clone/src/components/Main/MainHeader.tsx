import React from 'react';
import * as S from './MainHeader.style';

const MainHeader = () => {
  return (
    <>
      <S.Container>
        <S.MainHeader>
          <S.Description>
            <p>W24</p>
            <p>BORN</p>
            <p>AGAIN</p>
          </S.Description>
          <S.MainHeaderImageDiv>
            <S.MainHeaderImage src="https://media.bunjang.co.kr/product/230222833_2_1696325478_w360.jpg"></S.MainHeaderImage>
          </S.MainHeaderImageDiv>
        </S.MainHeader>
      </S.Container>
    </>
  );
};

export default MainHeader;
