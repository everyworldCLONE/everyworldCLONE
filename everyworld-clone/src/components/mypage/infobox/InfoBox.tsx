import React from 'react';
import * as S from './InfoBox.style';
import profile from '../../../assets/icons/profile.svg';
import { useRecoilState } from 'recoil';
import { WalletConnect } from '../../../atoms/WalletConnectAtom';
import { useNavigate } from 'react-router-dom';
import { WalletInfo } from '../../../atoms/WalletAtom';

interface propsType {
  address: string;
}

interface wallet {
  nftExist: boolean;
  walletName: string;
  nftList: [];
}

const InfoBox = (props: propsType) => {
  const [isConnected, setIsConnected] = useRecoilState<boolean>(WalletConnect);
  const [walletInfo, setWalletInfo] = useRecoilState<wallet>(WalletInfo);

  const nav = useNavigate();

  const formattingWalletAddress = (address: string) => {
    if (address?.length > 10) {
      const start = address.slice(0, 5);
      const end = address.slice(-5);
      return start + '...' + end;
    }
    return address;
  };
  const formattedAddress = formattingWalletAddress(props.address);

  const connectedHandler = () => {
    setWalletInfo((prevItemList) => ({
      ...prevItemList,
      nftExist: false,
      walletName: '',
      nftList: [],
    }));
    setIsConnected(false);
    nav('/');
  };

  const copyClipBoardHandler = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      alert('지갑주소가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };
  return (
    <S.Wrap>
      <S.IconWrap>
        <img src={profile} />
      </S.IconWrap>
      <S.Container>
        <h1>{formattedAddress}</h1>
        <S.BtnBox>
          <S.BtnWrap>
            <button
              onClick={() => {
                copyClipBoardHandler(props.address);
              }}
            >
              지갑주소 복사
            </button>
          </S.BtnWrap>
          <S.BtnWrap>
            <button onClick={connectedHandler}>지갑연결 해제하기</button>
          </S.BtnWrap>
        </S.BtnBox>
      </S.Container>
    </S.Wrap>
  );
};

export default InfoBox;
