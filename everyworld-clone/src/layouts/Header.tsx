import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.style';
import LanguageSvg from '../assets/icons/language.svg';
import { useLanguage } from '../hooks/useLanguage';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import { LanguagesState } from '../atoms/LanguagesAtom';

const Header = () => {
  //현재 랭기지
  const [languages, setLanguages] = useRecoilState(LanguagesState);

  //랭기지창 보여주기 상태
  const [languagesVisible, setLanguagesVisible] = useState(false);

  //랭기지창 토글 버튼
  const toggleLanguages = () => {
    setLanguagesVisible(!languagesVisible);
  };

  const languageSelectHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setLanguagesVisible(!languagesVisible);

    const selectedLanguage = (e.target as HTMLLIElement).textContent;
    if (selectedLanguage === 'English') {
      setLanguages('en');
    } else if (selectedLanguage === '한국어') {
      setLanguages('kr');
    } else if (selectedLanguage === 'Español') {
      setLanguages('es');
    }
  };

  console.log(languages);

  // // 언어 바꾸는 함수 => 커스텀 훅으로 빼놨습니다 -지우
  // const languageHandler = (selectedLanguage: string) => {
  //   setLanguages(useLanguage(selectedLanguage));
  // };

  //언어 변경 요청하기

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
              <span>{languages.toUpperCase()}</span>
            </S.LanguageButtonDiv>
            {languagesVisible && (
              <S.LanguageList>
                <ul>
                  <li onClick={languageSelectHandler}>English</li>
                  <li onClick={languageSelectHandler}>한국어</li>
                  <li onClick={languageSelectHandler}>Español</li>
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
