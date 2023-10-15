import React, { useEffect, useState } from 'react';
import * as S from './AlbumDetail.style';
import PlayList from './PlayList';
import AlbumIntro from './AlbumIntro';

type musicList = [];

interface propsType {
  albumDes: {
    title: string;
    content: string;
    img: string;
  };
  music: musicList;
  introCheck: boolean;
}

const DetailList = (props: propsType) => {
  const [musicList, setMusicList] = useState<musicList>([]);
  const [currentMusic, setCurrentMusic] = useState<number | null>(null);

  useEffect(() => {
    setMusicList(props.music);
  }, [props.music]);

  return (
    <>
      <S.DetailWrap>
        {props.introCheck && <AlbumIntro albumIntro={props.albumDes} />}
        <div>
          {musicList?.map((data, index) => (
            <React.Fragment key={index}>
              <h3>
                {data[0]}. {data[1]}
              </h3>
              <p>{data[2]}</p>
            </React.Fragment>
          ))}
        </div>
      </S.DetailWrap>
      <S.MusicBox>
        <S.MusicWrap>
          <S.BoxHeader>
            <h4>Song Previews:</h4>
          </S.BoxHeader>
          <div>
            {musicList?.map((data, index) => (
              <PlayList
                music={data[3]}
                title={data[1]}
                id={data[0]}
                key={index}
                currentMusic={currentMusic}
                setCurrentMusic={setCurrentMusic}
              />
            ))}
          </div>
        </S.MusicWrap>
      </S.MusicBox>
    </>
  );
};

export default DetailList;
