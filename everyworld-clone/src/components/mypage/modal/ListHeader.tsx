import React from 'react';
import * as S from '../../../pages/mypage/MyPageLayout.style';

// 헤더 확장성을 위해 컴포넌트 분리
const ListHeader = () => {
  return (
    <S.ListHeader>
      <div>
        <button>MY NFT</button>
      </div>
    </S.ListHeader>
  );
};

export default ListHeader;
