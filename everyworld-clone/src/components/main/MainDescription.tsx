import React from 'react';
import * as S from './MainDescription.style';

interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const MainDescription = (props: propsType) => {
  return (
    <>
      <S.Container>
        <S.MainHeaderText>
          <span>
            <p>{props.data?.content[0]}</p>
          </span>

          <span>
            <p>{props.data?.content[1]}</p>
          </span>
        </S.MainHeaderText>
      </S.Container>
    </>
  );
};

export default MainDescription;
