import React from 'react';
import * as S from './MainLayout.style';
import MainHeader from '../../components/Main/MainHeader';
import MainDescription from '../../components/Main/MainDescription';
import MainSeondDescription from '../../components/Main/MainSecoudDescription';
import MainThirdDescription from '../../components/Main/MainThirdDescription';
import MainFourthDescription from '../../components/Main/MainFourthDescription';
const MainLayout = () => {
  return (
    <>
      <S.Container>
        <MainHeader></MainHeader>
        <MainDescription></MainDescription>
        <MainSeondDescription></MainSeondDescription>
        <MainThirdDescription></MainThirdDescription>
        <MainFourthDescription></MainFourthDescription>
      </S.Container>
    </>
  );
};

export default MainLayout;
