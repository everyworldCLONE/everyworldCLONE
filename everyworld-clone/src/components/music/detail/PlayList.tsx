import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import * as S from './AlbumDetail.style';
import PlayBtn from '../../../assets/icons/play.svg';
import StopBtn from '../../../assets/icons/stop.svg';

interface propsType {
  music: string;
  id: string;
  title: string;
  currentMusic?: string;
  setCurrentMusic: React.Dispatch<SetStateAction<string>>;
}

const PlayList = (props: propsType) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    if (sound.current) {
      return () => {
        sound.current!.stop();
        setIsPlay(false);
      };
    }
  }, [props.currentMusic]);

  const playMusic = () => {
    sound.current = new Howl({
      src: [props.music],
      onend: () => {
        setIsPlay(false);
      },
    });
    sound.current.play();
    setIsPlay(true);
    props.setCurrentMusic(props.id);
  };

  const musicHandler = () => {
    if (!props.currentMusic) {
      playMusic();
    } else if (props.id !== props.currentMusic) {
      sound.current?.stop();
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
          <p>{props.title}</p>
        </S.PlayWrap>
      </S.PlayBox>
    </div>
  );
};

export default PlayList;
