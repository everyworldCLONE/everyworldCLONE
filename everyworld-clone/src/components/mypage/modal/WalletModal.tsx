import React from 'react';
import * as S from './Wallet.style';
import XMark from '../../../assets/icons/x-mark.svg';
import { Link } from 'react-router-dom';

const WalletModal = () => {
  return (
    <S.Wrap>
      <S.DimBg></S.DimBg>
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
            <input type="text" placeholder="내 지갑 이름" />
            <button>내 지갑 연결하기</button>
          </S.InputBox>
          <div>
            <span>지갑을 연결하면, 귀하는 EveryWorld의 </span>
            <Link to="https://favor-w24.s3.ap-northeast-2.amazonaws.com/files/Everyworld_terms_of_service.pdf">
              <span style={{ color: 'black' }}>이용약관</span>
            </Link>
            <span>과 </span>
            <Link to="https://favor-w24.s3.ap-northeast-2.amazonaws.com/files/Everyworld_privacy_policy.pdf">
              <span style={{ color: 'black' }}>개인정보처리방침</span>
            </Link>
            <span>에 동의하는 것으로 간주합니다.</span>
          </div>
        </S.ContentBox>
      </S.Container>
    </S.Wrap>
  );
};

export default WalletModal;
