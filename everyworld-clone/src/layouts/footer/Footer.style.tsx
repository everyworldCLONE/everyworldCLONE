import styled from 'styled-components';

export const Wrap = styled.footer`
  padding-left: 100px;
  padding-right: 100px;
  background-color: black;
`;

export const Container = styled.div`
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  color: rgb(160 160 160);
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
`;

export const TopText = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-bottom: 1.5rem;
  div {
    margin-top: 0.5rem;
    display: flex;
  }
  span {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0;
    padding-right: 0.75rem;
  }
`;

export const BottomText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-top: 1.5rem;
  border-top: 1px solid rgb(160 160 160);
`;

export const BottomLeft = styled.div`
  margin-right: 4rem;
  order: -9999;
`;

export const BottomRight = styled.div`
  order: 9999;
  display: flex;
  p {
    margin-left: 1rem;
  }
  div {
    display: flex;
  }
`;
