import React from 'react';
import * as S from './EveryWorldGallery.style';
interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const EveryWorldGallery = (props: propsType) => {
  return (
    <>
      <S.Container>
        <S.TextDiv>
          <p>{props.data?.title[0]}</p>
          <p>{props.data?.title[1]}</p>
        </S.TextDiv>
        <S.DivGrid>
          <S.GalleryImage>
            <img src={props.data?.img[0]} />
          </S.GalleryImage>
          <S.GalleryImage>
            <img src={props.data?.img[1]} />
          </S.GalleryImage>
          <S.GalleryImage>
            <img src={props.data?.img[2]} />
          </S.GalleryImage>
          <S.GalleryImage>
            <img src={props.data?.img[3]} />
          </S.GalleryImage>
        </S.DivGrid>
      </S.Container>
    </>
  );
};

export default EveryWorldGallery;
