import React from 'react';
import * as S from './AlbumDetail.style';

interface propsType {
  img: string;
  title: string[];
}

const AlbumCover = (props: propsType) => {
  return (
    <S.AlbumCover>
      <S.AlbumImg>
        <img src={props.img} />
      </S.AlbumImg>
      <S.AlbumName>
        <div>
          {props.title?.map((text, index) => (
            <h2 key={index}>
              <span style={index % 2 === 0 ? { fontWeight: '700' } : {}}>{text}</span>
            </h2>
          ))}
        </div>
      </S.AlbumName>
    </S.AlbumCover>
  );
};

export default AlbumCover;
