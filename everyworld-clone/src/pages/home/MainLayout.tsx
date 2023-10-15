import React from 'react';
import * as S from './MainLayout.style';
import MainHeader from '../../components/main/MainHeader';
import MainDescription from '../../components/main/MainDescription';
import MainSecondDescription from '../../components/main/MainSecondDescription';
import MainThirdDescription from '../../components/main/MainThirdDescription';
import MainFourthDescription from '../../components/main/MainFourthDescription';

const MainLayout = () => {
  return (
    <>
      <S.Container>
        <MainHeader></MainHeader>
        <MainDescription></MainDescription>
        <MainSecondDescription></MainSecondDescription>
        <MainThirdDescription></MainThirdDescription>
        <MainFourthDescription></MainFourthDescription>
      </S.Container>
    </>
  );
};

export default MainLayout;
