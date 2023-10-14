import React from 'react';
import MemberShipHeader from '../../components/membership/MemberShipHeader';
import * as S from './MemberShipLayout.style';

const MemberShipLayout = () => {
  return (
    <>
      <S.Container>
        <MemberShipHeader />
      </S.Container>
    </>
  );
};

export default MemberShipLayout;
