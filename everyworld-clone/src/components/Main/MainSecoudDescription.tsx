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
        </S.SaleInformationsBox>
      </S.Container>
    </>
  );
};

export default MainSecoudDescription;
