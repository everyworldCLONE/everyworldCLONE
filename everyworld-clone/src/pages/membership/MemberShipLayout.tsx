import React from 'react';
import MemberShipHeader from '../../components/membership/MemberShipHeader';
import PurchaseMembershipCard from '../../components/membership/PurchaseMembershipCard';
import * as S from './MemberShipLayout.style';

const MemberShipLayout = () => {
  return (
    <>
      <S.Container>
        <MemberShipHeader />
        <S.Section>
          <PurchaseMembershipCard></PurchaseMembershipCard>
        </S.Section>
      </S.Container>
    </>
  );
};

export default MemberShipLayout;
