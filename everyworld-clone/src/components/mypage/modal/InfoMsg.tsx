import React from 'react';
import { Link } from 'react-router-dom';

const InfoMsg = () => {
  return (
    <div>
      <span>지갑을 연결하면, 귀하는 EveryWorld의 </span>
      <Link
        target="_blank"
        to="https://favor-w24.s3.ap-northeast-2.amazonaws.com/files/Everyworld_terms_of_service.pdf"
      >
        <span style={{ color: 'black' }}>이용약관</span>
      </Link>
      <span>과 </span>
      <Link
        target="_blank"
        to="https://favor-w24.s3.ap-northeast-2.amazonaws.com/files/Everyworld_privacy_policy.pdf"
      >
        <span style={{ color: 'black' }}>개인정보처리방침</span>
      </Link>
      <span>에 동의하는 것으로 간주합니다.</span>
    </div>
  );
};

export default InfoMsg;
