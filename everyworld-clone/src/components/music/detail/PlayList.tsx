import React, { useRef, useState } from 'react';
import { Howl } from 'howler';
import * as S from './AlbumDetail.style';
import PlayBtn from '../../../assets/icons/play.svg';
import StopBtn from '../../../assets/icons/stop.svg';
import soundFile from '../../../assets/lost-stars.mp3';

interface propsType {
  data: {
    id: number;
    title: string;
    content: string;
    music: string;
  };
}

const PlayList = (props: propsType) => {
  const [isPlay, setIsPlay] = useState(false);
  const sound = useRef<Howl | null>(null);

  const musicHandler = () => {
    if (sound.current) {
      sound.current.stop();
    } else {
      sound.current = new Howl({
        src: [soundFile],
        onend: () => {
          setIsPlay(false);
        },
      });
    }

    if (isPlay) {
      sound.current.pause();
    } else {
      sound.current.play();
    }
    setIsPlay(!isPlay);
  };

  return (
    <div>
      <S.PlayBox>
        <S.PlayWrap>
          <div onClick={musicHandler}>
            {!isPlay ? <img src={PlayBtn} /> : <img src={StopBtn} />}
          </div>
          <p>{props.data.title}</p>
        </S.PlayWrap>
      </S.PlayBox>
    </div>
  );
};

export default PlayList;
