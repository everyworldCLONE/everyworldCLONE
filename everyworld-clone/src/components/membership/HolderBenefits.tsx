import React from 'react';
import * as S from './HolderBenefits.style';

interface propsType {
  data: any[];
}
const HolderBenefits = (props: propsType) => {
  //전달된 이미지랑 텍스트 베네핏카드에 map돌리기
  console.log('베네핏', props.data);
  return (
    <div>
      <S.Container>
        <S.Title>Holder Benefits (Online/Offline)</S.Title>
        <S.BenefitCardSection>
          {props.data?.map((data, index) => {
            return (
              <S.Card key={index}>
                <S.CardImageDiv>
                  <img src={data?.img} alt="" />
                </S.CardImageDiv>
                <S.CardTextDiv>
                  <div>
                    <h3>{data?.title}</h3>
                  </div>
                  <div>
                    <p>{data?.content}</p>
                  </div>
                </S.CardTextDiv>
              </S.Card>
            );
          })}
        </S.BenefitCardSection>
      </S.Container>
    </div>
  );
};

export default HolderBenefits;
