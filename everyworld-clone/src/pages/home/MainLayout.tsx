import React, { useState, useEffect } from 'react';
import * as S from './MainLayout.style';
import MainHeader from '../../components/main/MainHeader';
import MainDescription from '../../components/main/MainDescription';
import MainSecondDescription from '../../components/main/MainSecondDescription';
import MainThirdDescription from '../../components/main/MainThirdDescription';
import MainFourthDescription from '../../components/main/MainFourthDescription';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { LanguagesState } from '../../atoms/LanguagesAtom';

const MainLayout = () => {
  //랭기지를 변경해서 가져온 데이터
  const [data, setData] = useState<[] | undefined>([]);
  //현재 랭기지
  const [languages, setLanguages] = useRecoilState<string>(LanguagesState);

  const url = 'https://codevelop.store/api/v1/home';
  const params = {
    //여기에다가 recoli 가져오면됨
    language: languages,
  };

  // Axios를 사용하여 GET 요청 보내기
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url, { params })
        .then((response) => {
          // 요청이 성공했을 때의 처리
          setData(response.data.data);
        })
        .catch((error) => {
          // 요청이 실패했을 때의 처리
          console.error('오류 발생:', error);
        });
    };

    fetchData();
  }, [languages]);

  return (
    <>
      <S.Container>
        <MainHeader data={data[0]}></MainHeader>
        <MainDescription data={data[0]}></MainDescription>
        <MainSecondDescription data={data[1]}></MainSecondDescription>
        <MainThirdDescription data={data[2]}></MainThirdDescription>
        <MainFourthDescription data={data[3]}></MainFourthDescription>
      </S.Container>
    </>
  );
};

export default MainLayout;
