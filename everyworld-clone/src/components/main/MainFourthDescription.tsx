import React from 'react';
import * as S from './MainFourthDescription.style';
import ArrowCircleRight from '../../assets/icons/arrow_circle_right.svg';
const MainFourthDescription = () => {
  return (
    <>
      <S.Container>
        <S.LeftDiv>
          <img
            src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fw24-_iPhone_X.png&w=3840&q=75"
            alt=""
          />
        </S.LeftDiv>
        <S.RightDiv>
          <S.Text>
            <p>W24</p>
            <p>IN MY</p>
            <p>POCKET</p>
          </S.Text>
          <S.Paragraph>
            <p>
              Come join the EveryWorld Discord and have a great time! Interact with EVERYs from all
              around the world, listen to music together, and even have unexpected conversations
              with W24.
            </p>
          </S.Paragraph>
          <S.ArrowButton>
            <img src={ArrowCircleRight} alt="" />
          </S.ArrowButton>
        </S.RightDiv>
      </S.Container>
    </>
  );
};

export default MainFourthDescription;
