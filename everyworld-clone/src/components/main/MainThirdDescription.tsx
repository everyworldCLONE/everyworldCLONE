import React from 'react';
import * as S from './MainThirdDescription.style';
const MainThirdDescription = () => {
  return (
    <>
      <S.Container>
        <div>
          <div>
            <S.Title>
              <p>EVENT</p>
              <p>CONCERT</p>
            </S.Title>
          </div>
          <S.Section>
            <p>W24 has exciting plans to perform at numerous concerts.</p>
            <p>
              Membership holders with concert tickets have the opportunity to enter rehearsals
              through a lottery and enjoy various benefits, including ticket discounts. Become a
              holder and experience special perks at upcoming concerts without any additional costs.
            </p>
            <p>You can access the link to reserve concert tickets and find detailed information.</p>
            <S.MainThirdImageDiv>
              <img
                src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fw24_schedule_updated.png&w=3840&q=75"
                alt=""
              />
            </S.MainThirdImageDiv>
            <div>
              <p>[ Book tickets ]</p>
              <p>
                <S.BorderBottom>Mexico Monterrey</S.BorderBottom> /{' '}
                <S.BorderBottom>Mexico Guadalajara</S.BorderBottom>
              </p>
              <p>
                <S.BorderBottom>Mexico City</S.BorderBottom> /{' '}
                <S.BorderBottom>Ecuador</S.BorderBottom>
              </p>
              <p>
                <S.BorderBottom>Peru</S.BorderBottom> / <S.BorderBottom>Guatemala</S.BorderBottom>
              </p>
            </div>
            <S.RightImage src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2FBorn%20again%20tour.jpeg&w=3840&q=75"></S.RightImage>
          </S.Section>
        </div>
      </S.Container>
    </>
  );
};

export default MainThirdDescription;
