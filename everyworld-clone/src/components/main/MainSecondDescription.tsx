import React from 'react';
import * as S from './MainSecondDescription.style';
import NftImageBox from './NftImageBox';
import SaleTimer from './SaleTimer';

interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const MainSecoudDescription = (props: propsType) => {
  return (
    <>
      <S.Container>
        <NftImageBox></NftImageBox>
        <S.SaleInformationsBox>
          <p>{props.data?.title[0]}</p>
          <p>{props.data?.title[1]}</p>
          <SaleTimer></SaleTimer>
          <S.Text>
            <p>{props.data?.content[0]}</p>
          </S.Text>
        </S.SaleInformationsBox>
      </S.Container>
    </>
  );
};

export default MainSecoudDescription;
