import React, { useState, useEffect } from 'react';
import MemberShipHeader from '../../components/membership/MemberShipHeader';
import PurchaseMembershipCard from '../../components/membership/PurchaseMembershipCard';
import * as S from './MemberShipLayout.style';
import EveryWorldGallery from '../../components/membership/EveryWorldGallery';
import Community from '../../components/membership/Community';
import HolderBenefits from '../../components/membership/HolderBenefits';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { LanguagesState } from '../../atoms/LanguagesAtom';
const MemberShipLayout = () => {
  //랭기지를 변경해서 가져온 데이터
  const [data, setData] = useState<[] | undefined>([]);
  //랭기지를 변경해서 가져온 베네핏 데이터
  const [benefits, setBenefits] = useState<[] | undefined>([]);
  //현재 랭기지
  const [languages, setLanguages] = useRecoilState<string>(LanguagesState);

  const url = 'http:///13.124.66.205:8080/api/v1/membership/content';
  const benefitsurl = 'http:///13.124.66.205:8080/api/v1/membership/benefit';
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

      await axios
        .get(benefitsurl, { params })
        .then((response) => {
          // 요청이 성공했을 때의 처리
          setBenefits(response.data.data);
        })
        .catch((error) => {
          // 요청이 실패했을 때의 처리
          console.error('오류 발생:', error);
        });
    };

    fetchData();
  }, [languages]);

  console.log(benefits);
  return (
    <>
      <S.Container>
        <MemberShipHeader data={data[0]} />
        <S.Section>
          <PurchaseMembershipCard data={data[0]}></PurchaseMembershipCard>
        </S.Section>

        <S.Section>
          <EveryWorldGallery data={data[1]}></EveryWorldGallery>
        </S.Section>
        <S.Section>
          <Community data={data[1]}></Community>
        </S.Section>
        <S.Section>
          <HolderBenefits data={benefits}></HolderBenefits>
        </S.Section>
      </S.Container>
    </>
  );
};

export default MemberShipLayout;
