import React from 'react';
import * as S from './MyPageLayout.style';

const MyPageLayout = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.RightLogo></S.RightLogo>
        <S.ContentBox>
          <S.MySection></S.MySection>
          <S.ListHeader>헤더</S.ListHeader>
          <S.ListSection>리스트</S.ListSection>
        </S.ContentBox>
      </S.Container>
    </S.Wrap>
  );
};

export default MyPageLayout;
