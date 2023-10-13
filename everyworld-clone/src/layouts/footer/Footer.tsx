import React from 'react';
import * as S from './Footer.style';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <S.Wrap>
      <S.Container>
        <S.TopText>
          <div>
            <span>(주)페이버엔터테인먼트</span>
            <span>|</span>
            <span>대표</span>
            <span>유민경</span>
            <span>|</span>
            <span>사업자 등록번호</span>
            <span>261-81-07801</span>
            <span>|</span>
            <span>통신판매업신고번호</span>
            <span>2023-서울강남-02782</span>
          </div>
          <div>
            <span>이메일</span>
            <span>contact.favor@gmail.com</span>
            <span>|</span>
            <span>전화번호</span>
            <span>02-518-9975</span>
            <span>|</span>
            <span>주소</span>
            <span>서울특별시 강남구 압구정로 32길 11, B1</span>
          </div>
        </S.TopText>
        <S.BottomText>
          <S.BottomRight>
            <Link
              target="_blank"
              to="https://favor-w24.s3.ap-northeast-2.amazonaws.com/files/Everyworld_terms_of_service.pdf"
            >
              <p>이용약관</p>
            </Link>
            <div>
              <p>|</p>
              <Link
                target="_blank"
                to="https://favor-w24.s3.ap-northeast-2.amazonaws.com/files/Everyworld_privacy_policy.pdf"
              >
                <p>개인정보처리방침</p>
              </Link>
            </div>
          </S.BottomRight>
          <S.BottomLeft>©️ 2023 FAVOR ENTERTAINMENT co.,ltd</S.BottomLeft>
        </S.BottomText>
      </S.Container>
    </S.Wrap>
  );
};

export default Footer;
