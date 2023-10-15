import React, { useEffect, useState } from 'react';
import * as S from './AlbumDetail.style';
import DetailList from './DetailList';
import { useParams } from 'react-router-dom';
import AlbumCover from './AlbumCover';
import DetailFooter from './DetailFooter';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import { LanguagesState } from '../../../atoms/LanguagesAtom';

interface albumInfo {
  img: string;
  title: string[];
  introduceCheck: boolean;
  introduce: albumIntroduce;
  musicList: {
    id: number;
    title: string;
    content: string;
    music: string;
  };
}
interface albumIntroduce {
  title: string;
  content: string;
  img: string;
}

const AlbumDetail = () => {
  const [language] = useRecoilState<string>(LanguagesState);
  const [albumInfo, setAlbumInfo] = useState<albumInfo>({});
  const { albumId } = useParams();

  const getAlbumInfo = async () => {
    const res = await axios.get(
      `https://codevelop.store/api/v1/music/${albumId}?language=${language}`,
    );
    setAlbumInfo(res.data.data);
    console.log(albumInfo);
  };

  useEffect(() => {
    getAlbumInfo();
  }, [language]);

  return (
    <S.Wrap>
      <div>
        <S.Container>
          <AlbumCover img={albumInfo.img} title={albumInfo.title} />
          <S.AlbumDetail>
            <DetailList
              introCheck={albumInfo.introduceCheck}
              albumDes={albumInfo.introduce}
              music={albumInfo.musicList}
            />
          </S.AlbumDetail>
        </S.Container>
        <DetailFooter />
      </div>
    </S.Wrap>
  );
};

export default AlbumDetail;
