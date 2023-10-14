import React from 'react';
import * as S from './InfoBox.style';
import profile from '../../../assets/icons/profile.svg';

const InfoBox = () => {
  return (
    <S.Wrap>
      <S.IconWrap>
        <img src={profile} />
      </S.IconWrap>
      <S.Container>
        <h1>0xE...eADfd</h1>
        <S.BtnBox>
          <S.BtnWrap>
            <button>지갑주소 복사</button>
          </S.BtnWrap>
          <S.BtnWrap>
            <button>지갑연결 해제하기</button>
          </S.BtnWrap>
        </S.BtnBox>
      </S.Container>
    </S.Wrap>
  );
};

export default InfoBox;
