import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
`;

export const IconWrap = styled.div`
  width: 36px;
  height: 36px;
  margin-top: 0.5rem;
  position: relative;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    object-fit: cover;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.5rem;
  h1 {
    font-size: 42px;
    line-height: 48px;
    margin: 0;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const BtnWrap = styled.div`
  button {
    letter-spacing: 0.16px;
    line-height: 20px;
    font-size: 12px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-width: 1px;
    border-radius: 9999px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: transparent;
    border: 1px solid white;
    box-shadow: none !important;
    color: white;
    margin-right: 0.5rem;
    transition: all 0.2s;
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
