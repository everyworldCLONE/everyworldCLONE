import React from 'react';
import * as S from './MusicLayout.style';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/begin-again.png';
import Img2 from '../../assets/sing-street.png';
import AlbumCard from '../../components/music/AlbumCard';

const MusicLayout = () => {
  const albumIdList = [
    {
      id: 1,
      img: Img1,
    },
    {
      id: 2,
      img: Img2,
    },
  ];
  return (
    <S.Wrap>
      <S.Wrapper>
        <S.Container>
          <S.SectionTitle>
            <h1>W24 Albums</h1>
          </S.SectionTitle>
          <S.SectionGird>
            {albumIdList.map((data, index) => (
              <AlbumCard data={data} key={index} />
            ))}
          </S.SectionGird>
        </S.Container>
      </S.Wrapper>
    </S.Wrap>
  );
};

export default MusicLayout;
