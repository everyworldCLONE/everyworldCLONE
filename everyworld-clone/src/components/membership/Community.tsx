import React from 'react';
import * as S from './Community.style';
import { Link } from 'react-router-dom';
const Community = () => {
  return (
    <div>
      <S.Container>
        <S.LeftDiv>
          <p>Community</p>
          <p>
            Get ready for an incredible experience as W24 and EVERYs from around the world eagerly
            await you on the EveryWorld Discord. Stay connected and be the first to know all the
            latest news and event updates. Join us in this vibrant community and have a blast.
          </p>
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
