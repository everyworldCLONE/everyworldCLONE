import React, { useEffect, useState } from 'react';
import * as S from './MusicLayout.style';
import AlbumCard from '../../components/music/AlbumCard';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { LanguagesState } from '../../atoms/LanguagesAtom';

type albumList = albumItem[];
interface albumItem {
  id: number;
  img: string;
}

const MusicLayout = () => {
  const [albumIdList, setAlbumIdList] = useState<albumList>([]);
  const [language] = useRecoilState<string>(LanguagesState);

  const getAlbumList = async () => {
    const res = await axios.get(`https://codevelop.store/api/v1/music?language=${language}`, {});
    setAlbumIdList(res.data.data);
  };

  useEffect(() => {
    getAlbumList();
  }, []);

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
