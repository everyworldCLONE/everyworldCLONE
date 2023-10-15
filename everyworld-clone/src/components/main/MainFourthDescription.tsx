import React from 'react';
import * as S from './MainFourthDescription.style';
import ArrowCircleRight from '../../assets/icons/arrow_circle_right.svg';

interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const MainFourthDescription = (props: propsType) => {
  return (
    <>
      <S.Container>
        <S.LeftDiv>
          <img src={props.data?.img[0]} alt="" />
        </S.LeftDiv>
        <S.RightDiv>
          <S.Text>
            <p>{props.data?.title[0]} </p>
            <p>{props.data?.title[1]}</p>
            <p>{props.data?.title[2]}</p>
          </S.Text>
          <S.Paragraph>
            <p>{props.data?.content[0]}</p>
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
