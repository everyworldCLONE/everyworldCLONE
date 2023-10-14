import React from 'react';
import * as S from './MemberShipHeader.style';
const MemberShipHeader = () => {
  return (
    <>
      <S.Container>
        <S.PositionRelative>
          <S.TitleText>
            <p>OWN</p>
            <p>YOUR</p>
            <p>DOUBLEU</p>
          </S.TitleText>
        </S.PositionRelative>

        <S.ImageDiv>
          <S.Image
            src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fnft-drop-minting.jpg&w=3840&q=75"
            alt=""
          />
        </S.ImageDiv>
      </S.Container>
    </>
  );
};

export default MemberShipHeader;
