import React from 'react';
import * as S from './MainLayout.style';
import MainHeader from '../../components/Main/MainHeader';
import MainDescription from '../../components/Main/MainDescription';
import MainSeondDescription from '../../components/Main/MainSecoudDescription';
const MainLayout = () => {
  return (
    <>
      <S.Container>
        <MainHeader></MainHeader>
        <MainDescription></MainDescription>
        <MainSeondDescription></MainSeondDescription>
      </S.Container>
    </>
  );
};

export default MainLayout;
