import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import LanguageSvg from '../assets/icons/language.svg';

const Header = () => {
  const [languages, setLanguages] = useState('KR');
  return (
    <>
      <S.Container>
        <S.Logo src="https://www.everyworld.club/img/everyworld-logo.svg" />

        <S.HeaderNav>
          <S.StyleLink to="/">
            <img src={LanguageSvg} alt="" />
            <span>{languages}</span>
          </S.StyleLink>
          <S.StyleLink to="/">HOME</S.StyleLink>
          <S.StyleLink to="/">MEMBERSHIP</S.StyleLink>
          <S.StyleLink to="/music">MUSIC</S.StyleLink>
          <S.StyleLink to="/mypage">MY PAGE</S.StyleLink>
        </S.HeaderNav>
      </S.Container>
    </>
  );
};

export default Header;
