import React from 'react';
import FooterImg from '../../../assets/bgimg.png';
import * as S from './AlbumDetail.style';

const DetailFooter = () => {
  return (
    <S.DetailFooter>
      <S.DetailFooterImg>
        <img src={FooterImg} />
        <div />
      </S.DetailFooterImg>
    </S.DetailFooter>
  );
};

export default DetailFooter;
