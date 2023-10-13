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
            <S.MainHeaderImage src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2FW24-new%20Large.jpeg&w=3840&q=75"></S.MainHeaderImage>
          </S.MainHeaderImageDiv>
        </S.MainHeader>
      </S.Container>
    </>
  );
};

export default MainHeader;
