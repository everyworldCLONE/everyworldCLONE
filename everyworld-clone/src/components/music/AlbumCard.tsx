import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../pages/music/MusicLayout.style';

interface propsTypes {
  data: {
    id: number;
    img: string;
  };
}

const AlbumCard = (props: propsTypes) => {
  return (
    <>
      <Link to={`${props.data.id}`}>
        <button>
          <S.ImgWrap>
            <img src={props.data.img} />
          </S.ImgWrap>
        </button>
      </Link>
    </>
  );
};

export default AlbumCard;
