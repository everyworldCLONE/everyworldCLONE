import React from 'react';
import * as S from './MyPageLayout.style';
import InfoBox from '../../components/mypage/infobox/InfoBox';
import ListCard from '../../components/mypage/list/ListCard';

const MyPageLayout = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.RightLogo>
          <div>
            <span>W24</span>
            <span style={{ fontWeight: '100' }}>X</span>
            <span>ME</span>
          </div>
        </S.RightLogo>
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
        <S.ListFooter>
          <div>
            <p>연결한 지갑에 있는 EveryWorld NFT가 표시됩니다.</p>
          </div>
        </S.ListFooter>
      </S.Container>
    </S.Wrap>
  );
};

export default MyPageLayout;
