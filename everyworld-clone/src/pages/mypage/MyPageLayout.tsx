import React, { useState } from 'react';
import * as S from './MyPageLayout.style';
import InfoBox from '../../components/mypage/infobox/InfoBox';
import ListCard from '../../components/mypage/list/ListCard';
import WalletModal from '../../components/mypage/modal/WalletModal';
import { useRecoilState } from 'recoil';
import { WalletConnect } from '../../atoms/WalletConnectAtom';
import doubleYou from '../../assets/aron-solid.png';
import tripleYou from '../../assets/jg-solid.png';

interface wallet {
  isHas: boolean;
  address: string;
  NFT: NFTItem[];
}

interface NFTItem {
  id: number;
  name: string;
  img: string;
}

const MyPageLayout = () => {
  const Mock = {
    isHas: true,
    address: '0xE682CE6404a94A60d9B52ACddbe8F559Cb2eADfd',
    NFT: [
      {
        id: 1,
        name: 'DoubleYou',
        img: doubleYou,
      },
      {
        id: 2,
        name: 'TripleYou',
        img: tripleYou,
      },
    ],
  };
  const [isConnected, setIsConnected] = useRecoilState<boolean>(WalletConnect);
  const [walletInfo, setWalletInfo] = useState<wallet>(Mock);

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
            <InfoBox address={walletInfo.address} />
          </S.MySection>
          <S.ListHeader />
          {!walletInfo.isHas ? (
            <S.NoNFT>보유한 NFT가 없습니다.</S.NoNFT>
          ) : (
            <S.ListSection>
              {walletInfo.NFT.map((NFT, index) => (
                <ListCard NFT={NFT} key={index} />
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
