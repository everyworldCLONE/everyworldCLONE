import React, { useState } from 'react';
import * as S from './MyPageLayout.style';
import InfoBox from '../../components/mypage/infobox/InfoBox';
import ListCard from '../../components/mypage/list/ListCard';
import WalletModal from '../../components/mypage/modal/WalletModal';
import { useRecoilState } from 'recoil';
import { WalletConnect } from '../../atoms/WalletConnectAtom';
import { WalletInfo } from '../../atoms/WalletAtom';
import ListHeader from '../../components/mypage/modal/ListHeader';

interface wallet {
  nftExist: boolean;
  walletName: string;
  nftList: [];
}

const MyPageLayout = () => {
  const [isConnected, setIsConnected] = useRecoilState<boolean>(WalletConnect);
  const [walletInfo, setWalletInfo] = useRecoilState<wallet>(WalletInfo);

  return (
    <S.Wrap>
      {!isConnected && (
        <WalletModal setIsConnected={setIsConnected} setWalletInfo={setWalletInfo} />
      )}
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
            <InfoBox address={walletInfo.walletName} setWalletInfo={setWalletInfo} />
          </S.MySection>
          <ListHeader />
          {!walletInfo.nftExist ? (
            <S.NoNFT>보유한 NFT가 없습니다.</S.NoNFT>
          ) : (
            <S.ListSection>
              {walletInfo.nftList.map((nft, index) => (
                <ListCard NFT={nft} key={index} />
              ))}
            </S.ListSection>
          )}
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
