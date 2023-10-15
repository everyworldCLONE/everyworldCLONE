import React from 'react';

interface propsType {
  albumIntro: {
    title: string;
    content: string;
    img: string;
  };
}

const AlbumIntro = (props: propsType) => {
  return (
    <>
      <h3>{props.albumIntro.title}</h3>
      <p>{props.albumIntro.content}</p>
      <img src={props.albumIntro.img} />
    </>
  );
};

export default AlbumIntro;
