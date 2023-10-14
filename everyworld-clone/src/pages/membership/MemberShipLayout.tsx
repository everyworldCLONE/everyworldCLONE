import React from 'react';
import MemberShipHeader from '../../components/membership/MemberShipHeader';
import PurchaseMembershipCard from '../../components/membership/PurchaseMembershipCard';
import * as S from './MemberShipLayout.style';
import EveryWorldGallery from '../../components/membership/EveryWorldGallery';

const MemberShipLayout = () => {
  return (
    <>
      <S.Container>
        <MemberShipHeader />
        <S.Section>
          <PurchaseMembershipCard></PurchaseMembershipCard>
        </S.Section>

        <S.Section>
          <EveryWorldGallery></EveryWorldGallery>
        </S.Section>
      </S.Container>
    </>
  );
};

export default MemberShipLayout;
