import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import * as S from './AlbumDetail.style';
import PlayBtn from '../../../assets/icons/play.svg';
import StopBtn from '../../../assets/icons/stop.svg';

interface propsType {
  data: {
    id: number;
    title: string;
    content: string;
    music: string;
  };
  currentMusic: number;
  setCurrentMusic: (arg0: number) => void;
}

const PlayList = (props: propsType) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    if (sound.current) {
      return () => {
        sound.current!.stop();
        sound.current!.unload();
        setIsPlay(false);
      };
    }
  }, [props.currentMusic]);

  const playMusic = () => {
    sound.current = new Howl({
      src: [props.data.music],
      onend: () => {
        setIsPlay(false);
      },
    });
    sound.current.play();
    setIsPlay(true);
    props.setCurrentMusic(props.data.id);
  };

  const musicHandler = () => {
    if (!props.currentMusic) {
      playMusic();
    } else if (props.data.id !== props.currentMusic) {
      sound.current?.stop();
      sound.current?.unload();
      setIsPlay(false);
      playMusic();
    } else {
      if (isPlay) {
        sound.current?.pause();
        setIsPlay(false);
      } else {
        sound.current?.play();
        setIsPlay(true);
      }
    }
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
