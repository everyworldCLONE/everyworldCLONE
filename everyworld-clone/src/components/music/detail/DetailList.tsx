import React from 'react';
import * as S from './AlbumDetail.style';
import PlayList from './PlayList';

const DetailList = () => {
  const Mock = [
    {
      id: 1,
      title: 'Lost Stars',
      content: '영화의 엔딩곡이자 타이틀곡',
      music: '',
    },
    {
      id: 2,
      title: 'Tell Me If You Wanna Go Home',
      content: '엠파이어 스테이트 빌딩에서 밤에 마크러팔로 딸이 일렉기타 친 노래',
      music: '',
    },
    {
      id: 3,
      title: 'A Hgher Place',
      content: '애덤이 LA가서 만든 노래 (뺨 맞음)',
      music: '',
    },
    {
      id: 4,
      title: 'A Step You Can&#39;t Take Back ',
      content: '오프닝곡, 마크러팔로가 술김에 편곡을 상상하는 장면',
      music: '',
    },
  ];
  return (
    <>
      <S.DetailWrap>
        <div>
          {Mock.map((data, index) => (
            <React.Fragment key={index}>
              <h3>
                {data.id}. {data.title}
              </h3>
              <p>{data.content}</p>
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
            {Mock.map((data, index) => (
              <PlayList data={data} key={index} />
            ))}
          </div>
        </S.MusicWrap>
      </S.MusicBox>
    </>
  );
};

export default DetailList;
