import React from 'react';
import * as S from './MainLayout.style';
import MainHeader from '../../components/Main/MainHeader';
import MainDescription from '../../components/Main/MainDescription';

const MainLayout = () => {
  return (
    <>
      <MainHeader></MainHeader>

      <MainDescription></MainDescription>
    </>
  );
};

export default MainLayout;
