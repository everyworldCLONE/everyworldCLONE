import React, { SetStateAction, useState } from 'react';
import * as S from './Wallet.style';
import XMark from '../../../assets/icons/x-mark.svg';
import { Link } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import axios from 'axios';
import InfoMsg from './InfoMsg';

interface propsType {
  setIsConnected: SetterOrUpdater<boolean>;
  setWalletInfo: React.Dispatch<SetStateAction<wallet>>;
}

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

const WalletModal = (props: propsType) => {
  const [walletId, setWalletId] = useState<string>('');

  const onChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletId(e.target.value);
  };

  const connectHandler = async () => {
    const res = await axios.post('http:///13.124.66.205:8080/', {
      walletId: walletId,
    });
    props.setWalletInfo(res.data.data);
    props.setIsConnected(true);
  };

  return (
    <S.Wrap>
      <S.DimBg />
      <S.Container>
        <S.ContentBox>
          <Link to="/">
            <S.CancelBtn>
              <img src={XMark} />
            </S.CancelBtn>
          </Link>
          <S.ModalTitle>
            <h1>지갑 연결하기</h1>
          </S.ModalTitle>
          <S.InputBox>
            <input
              type="text"
              placeholder="내 지갑 이름"
              value={walletId}
              onChange={() => onChangHandler}
            />
            <button onClick={connectHandler}>내 지갑 연결하기</button>
          </S.InputBox>
          <InfoMsg />
        </S.ContentBox>
      </S.Container>
    </S.Wrap>
  );
};

export default WalletModal;
