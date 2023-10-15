import React from 'react';
import * as S from './MainThirdDescription.style';

interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const MainThirdDescription = (props: propsType) => {
  return (
    <>
      <S.Container>
        <div>
          <div>
            <S.Title>
              <p>{props.data?.title[0]}</p>
              <p>{props.data?.title[1]}</p>
            </S.Title>
          </div>
          <S.Section>
            <p>{props.data?.content[0]}</p>
            <p>{props.data?.content[1]}</p>
            <p>{props.data?.content[2]}</p>
            <S.MainThirdImageDiv>
              <img
                src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fw24_schedule_updated.png&w=3840&q=75"
                alt=""
              />
            </S.MainThirdImageDiv>
            <div>
              <p>[ Book tickets ]</p>
              <p>
                <S.BorderBottom>Mexico Monterrey</S.BorderBottom> /{' '}
                <S.BorderBottom>Mexico Guadalajara</S.BorderBottom>
              </p>
              <p>
                <S.BorderBottom>Mexico City</S.BorderBottom> /{' '}
                <S.BorderBottom>Ecuador</S.BorderBottom>
              </p>
              <p>
                <S.BorderBottom>Peru</S.BorderBottom> / <S.BorderBottom>Guatemala</S.BorderBottom>
              </p>
            </div>
            <S.RightImage src={props.data?.img[0]}></S.RightImage>
          </S.Section>
        </div>
      </S.Container>
    </>
  );
};

export default MainThirdDescription;
