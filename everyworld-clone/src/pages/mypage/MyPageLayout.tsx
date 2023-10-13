import React from 'react';
import * as S from './MyPageLayout.style';
import InfoBox from '../../components/mypage/infobox/InfoBox';
import ListCard from '../../components/mypage/list/ListCard';

const MyPageLayout = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.RightLogo></S.RightLogo>
        <S.ContentBox>
          <S.MySection>
            <InfoBox />
          </S.MySection>
          <S.ListHeader>
            <div>
              <button>MY NFT</button>
            </div>
          </S.ListHeader>
          {/* <S.NoNFT>보유한 NFT가 없습니다.</S.NoNFT> */}
          <S.ListSection>
            <ListCard />
          </S.ListSection>
        </S.ContentBox>
      </S.Container>
    </S.Wrap>
  );
};

export default MyPageLayout;
