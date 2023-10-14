import React, { useState, useRef, useEffect } from 'react';
import * as S from './PurchaseMembershipCard.style';
import WalletModal from '../mypage/modal/WalletModal';
import { useRecoilState } from 'recoil';

const PurchaseMembershipCard = () => {
  //멤버쉽 수량
  const [quantity, setQuantity] = useState<number>(1);
  //토탈가격
  const [totalPrice, setTotalPrice] = useState<number>(0);
  // 달러,클레이변환
  const [exchangeRate, setExchangeRate] = useState<string>('USD');
  // 모달창 온,오프
  const [isModal, setIsModal] = useState<boolean>(false);

  //지갑연결하기 리코일
  const [isConnected, setIsConnected] = useRecoilState<boolean>(WalletConnect);

  useEffect(() => {
    price();
  }, [quantity, exchangeRate]);

  //버튼 클릭하면 수량 +1
  const plusButtonHandler = () => {
    setQuantity((prev) => {
      if (quantity < 5) {
        return prev + 1;
      }
      return prev;
    });
  };

  //버튼 클릭하면 수량 -1
  const minusButtonHandler = () => {
    setQuantity((prev) => {
      if (quantity > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  //라디오 버튼 클릭된 화폐
  const exchangeRateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExchangeRate(e.target.value);
  };

  // 1멤버쉽 = 305 klay =38USD 가격계산기
  const price = () => {
    if (exchangeRate === 'Klay') {
      setTotalPrice(quantity * 305);
    }
    if (exchangeRate === 'USD') {
      setTotalPrice(quantity * 38);
    }
  };

  //modalHandler
  const modalHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      {isModal ? <WalletModal></WalletModal> : <></>}

      <S.Container>
        <S.SectionLeft>
          <S.Text>
            <p>DoubleU</p>
            <p>
              The first EveryWorld Digital Membership Card, crafted with boundless excitement and
              enthusiasm, inspired by the four extraordinary members of W24!
            </p>
            <p>
              Prepare to embark on a journey where 3,000 DoubleU hold not just treasures, but 3,000
              dreams. Get ready to seize your piece of the dream and become a part of this thrilling
              adventure!
            </p>
          </S.Text>
        </S.SectionLeft>
        <S.SectionRight>
          <S.MembershipCardPurchaseModal>
            <S.InnerTextDiv>
              <div>
                <S.DivSpaceBetween>
                  <div>
                    <span>Steps</span>
                  </div>
                  <div>
                    <span>Public Sale Round</span>
                  </div>
                </S.DivSpaceBetween>

                <S.DivSpaceBetween>
                  <div>
                    <span>Start</span>
                  </div>
                  <div>
                    <span>2023/09/13 15:00 (UTC+9)</span>
                  </div>
                </S.DivSpaceBetween>

                <S.DivSpaceBetween>
                  <div>
                    <span>End</span>
                  </div>
                  <div>
                    <span>2023/10/11 23:00 (UTC+9)</span>
                  </div>
                </S.DivSpaceBetween>
                <S.DivSpaceBetween>
                  <div>
                    <span>Payment</span>
                  </div>
                  <S.RadioWrapper>
                    <S.DivFlex>
                      <div className="radiobox">
                        <input
                          onChange={exchangeRateHandler}
                          className="ring-1 ring-white checkbox-round"
                          type="radio"
                          id="Klay"
                          name="Payment"
                          value="Klay"
                        ></input>
                      </div>
                      <S.Label htmlFor="Klay">Klay</S.Label>
                    </S.DivFlex>

                    <S.DivFlex>
                      <div className="radiobox">
                        <input
                          onChange={exchangeRateHandler}
                          className="ring-1 ring-white checkbox-round"
                          type="radio"
                          id="USD"
                          name="Payment"
                          value="USD"
                          defaultChecked
                        ></input>
                      </div>
                      <S.Label htmlFor="USD">USD</S.Label>
                    </S.DivFlex>
                  </S.RadioWrapper>
                </S.DivSpaceBetween>

                <S.DivSpaceBetween>
                  <div>
                    <span>Quantity</span>
                  </div>
                  <S.DivFlexWidth>
                    <S.PlusButton onClick={plusButtonHandler}>+</S.PlusButton>
                    <S.Number>{quantity}</S.Number>
                    <S.MinusButton onClick={minusButtonHandler}>-</S.MinusButton>
                  </S.DivFlexWidth>
                </S.DivSpaceBetween>

                <S.DivSpaceBetween>
                  <div>
                    <span>Total Price</span>
                  </div>
                  <div>
                    {exchangeRate === 'Klay' ? (
                      <span> {totalPrice} Klay</span>
                    ) : (
                      <span> {totalPrice} USD</span>
                    )}
                  </div>
                </S.DivSpaceBetween>
              </div>
            </S.InnerTextDiv>
            <S.PurchaseButton onClick={modalHandler}>Purchase</S.PurchaseButton>
          </S.MembershipCardPurchaseModal>
        </S.SectionRight>
      </S.Container>
    </>
  );
};

export default PurchaseMembershipCard;
