import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  display: flex;
  gap: 2.5rem;
`;

export const DivFlex = styled.div`
  display: flex;
`;
export const DivFlexWidth = styled.div`
  display: flex;
  justify-content: space-around;

  width: 250px;
`;

export const SectionLeft = styled.div`
  width: 100%;
`;
export const Text = styled.div`
  p {
    font-size: 20px;
  }
  p:first-child {
    font-size: 30px;
  }
`;

// 구입창
export const SectionRight = styled.div`
  width: 100%;
  height: auto;
`;

export const MembershipCardPurchaseModal = styled.div`
  width: 80%;

  border: 4px solid white;
  padding: 1rem 2.5rem 30px;
`;

export const InnerTextDiv = styled.div`
  font-size: 22px;
`;

export const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  width: 14rem;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-left: 1rem;
`;

// 수량 추가 버튼

export const PlusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid white;
`;

export const MinusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: 1px solid white;
`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`;

// 구입 버튼
export const PurchaseButton = styled.button`
  width: 100%;
  padding: 16.5px 0;
  margin-top: 20px;
`;
