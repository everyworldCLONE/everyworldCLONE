import React from 'react';
import * as S from './MainSecondDescription.style';
import NftImageBox from './NftImageBox';
import SaleTimer from './SaleTimer';

const MainSecoudDescription = () => {
  return (
    <>
      <S.Container>
        <NftImageBox></NftImageBox>
        <S.SaleInformationsBox>
          <p>ON</p>
          <p>SALE</p>
          <SaleTimer></SaleTimer>
          <S.Text>
            <p>
              Get ready for the launch of EveryWorld membership! Holders will be assigned unique
              roles and receive exclusive membership benefits. Join now.
            </p>
          </S.Text>
        </S.SaleInformationsBox>
      </S.Container>
    </>
  );
};

export default MainSecoudDescription;
