import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import LanguageSvg from '../assets/icons/language.svg';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  //현재 랭기지
  const [languages, setLanguages] = useState('KR');

  //랭기지창 보여주기 상태
  const [languagesVisible, setLanguagesVisible] = useState(false);

  //랭기지창 토글 버튼
  const toggleLanguages = () => {
    setLanguagesVisible(!languagesVisible);
  };

  const languageSelectHandler = (e: React.MouseEventHandler<HTMLLIElement>) => {
    setLanguagesVisible(!languagesVisible);
    console.log(e.target.textContent);
  };

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
          <div>
            <S.LanguageButtonDiv onClick={toggleLanguages} onBlur={toggleLanguages}>
              <img src={LanguageSvg} alt="" />
              <span>{languages}</span>
            </S.LanguageButtonDiv>
            {languagesVisible && (
              <S.LanguageList>
                <ul>
                  <li ref={selectLanguage1} onClick={languageSelectHandler}>
                    English
                  </li>
                  <li ref={selectLanguage2} onClick={languageSelectHandler}>
                    한국어
                  </li>
                  <li ref={selectLanguage3} onClick={languageSelectHandler}>
                    Español
                  </li>
                </ul>
              </S.LanguageList>
            )}
          </div>

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
