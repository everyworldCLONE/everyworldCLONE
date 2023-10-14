import React from 'react';
import * as S from './MainDescription.style';

const MainDescription = () => {
  //랭귀지상태에따라 다른화면 나와야함
  return (
    <>
      <S.Container>
        <S.MainHeaderText>
          <span>
            <p>
              EveryWorld is a Web3 community based on digital membership that are inspired by the
              characters of K-Pop band W24.
            </p>
          </span>

          <span>
            <p>
              All EVERYs can participate and thrive, and membership holders can enjoy special
              privileges and endless fun.
            </p>
          </span>
        </S.MainHeaderText>
      </S.Container>
    </>
  );
};

export default MainDescription;
