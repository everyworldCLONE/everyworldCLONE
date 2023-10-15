import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import LanguageSvg from '../assets/icons/language.svg';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const [languages, setLanguages] = useState('KR');

  // 언어 바꾸는 함수 => 커스텀 훅으로 빼놨습니다 -지우
  // const languageHandler = (selectedLanguage: string) => {
  //   setLanguages(useLanguage(selectedLanguage));
  // };
  return (
    <>
      <S.Container>
        <Link to="/">
          <S.Logo src="https://www.everyworld.club/img/everyworld-logo.svg" />
        </Link>

        <S.HeaderNav>
          <S.StyleLink to="/">
            <img src={LanguageSvg} alt="" />
            <span>{languages}</span>
          </S.StyleLink>
          <S.StyleLink to="/">HOME</S.StyleLink>
          <S.StyleLink to="/membership">MEMBERSHIP</S.StyleLink>
          <S.StyleLink to="/music">MUSIC</S.StyleLink>
          <S.StyleLink to="/mypage">MY PAGE</S.StyleLink>
        </S.HeaderNav>
      </S.Container>
    </>
  );
};

export default Header;
