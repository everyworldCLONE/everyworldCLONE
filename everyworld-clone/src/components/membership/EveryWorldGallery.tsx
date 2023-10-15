import React from 'react';
import * as S from './EveryWorldGallery.style';

const img =
  'https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fhw-solid.png&w=3840&q=75';
const EveryWorldGallery = () => {
  return (
    <>
      <S.Container>
        <S.TextDiv>
          <p>EVERYWORLD</p>
          <p>GALLERY</p>
        </S.TextDiv>
        <S.DivGrid>
          <S.GalleryImage>
            <img src={img} />
          </S.GalleryImage>
          <S.GalleryImage>
            <img src={img} />
          </S.GalleryImage>
          <S.GalleryImage>
            <img src={img} />
          </S.GalleryImage>
          <S.GalleryImage>
            <img src={img} />
          </S.GalleryImage>
        </S.DivGrid>
      </S.Container>
    </>
  );
};

export default EveryWorldGallery;
