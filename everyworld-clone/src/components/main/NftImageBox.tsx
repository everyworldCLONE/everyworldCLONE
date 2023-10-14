import React from 'react';
import * as S from './NftImageBox.style';
const NftImageBox = () => {
  return (
    <>
      <S.NftImageBox>
        <div>
          <S.NftImage src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fhw-pinlight.png&w=3840&q=75" />
        </div>
        <div>
          <S.NftImage src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fys-pinlight.png&w=3840&q=75" />
        </div>
        <div>
          <S.NftImage src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Fjg-pinlight.png&w=3840&q=75" />
        </div>
        <div>
          <S.NftImage src="https://www.everyworld.club/_next/image?url=https%3A%2F%2Fcms.everyworld.club%2Fmedia%2Faron-pinlight.png&w=3840&q=75" />
        </div>
      </S.NftImageBox>
    </>
  );
};

export default NftImageBox;
