import React from 'react';
import * as S from './Community.style';
import { Link } from 'react-router-dom';

interface propsType {
  data: {
    img: string[];
    title: string[];
    content: string[];
  };
}

const Community = (props: propsType) => {
  return (
    <div>
      <S.Container>
        <S.LeftDiv>
          <p>{props.data?.content[0]}</p>
          <p>{props.data?.content[1]}</p>
        </S.LeftDiv>
        <S.RightDiv>
          <S.DiscordImage>
            <Link to="https://discord.com/invite/WPMTRCQC94">
              <img
                src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2FEveryWorld%20Discord.png&w=828&q=75"
                alt=""
              />
            </Link>
          </S.DiscordImage>
        </S.RightDiv>
      </S.Container>
    </div>
  );
};

export default Community;
