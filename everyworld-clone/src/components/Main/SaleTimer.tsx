import React from 'react';
import * as S from './SaleTimer.style';
import { Link } from 'react-router-dom';
const SaleTimer = () => {
  return (
    <>
      <S.Container>
        <h3>Public Sale Round</h3>
        <S.DivGrid>
          <S.DivFlex>
            <div>00</div>
            <div>DAY</div>
          </S.DivFlex>
          <S.DivFlex>
            <div>00</div>
            <div>HOUR</div>
          </S.DivFlex>
          <S.DivFlex>
            <div>00</div>
            <div>MIN</div>
          </S.DivFlex>
          <S.DivFlex>
            <div>00</div>
            <div>SECOND</div>
          </S.DivFlex>
          <S.SaleGobutton>
            <Link to="/">Go</Link>
          </S.SaleGobutton>
        </S.DivGrid>
      </S.Container>
    </>
  );
};

export default SaleTimer;
