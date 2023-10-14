import styled from 'styled-components';
import { StyleLink } from '../../../layouts/Header.style';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 999;
  top: 0;
  position: fixed;
`;

export const DimBg = styled.aside`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(7px);
`;

export const Container = styled.div`
  border-radius: 0.375rem;
  min-width: 400px;
  z-index: 10;
  background-color: white;
  padding: 2.5rem;
`;

export const ContentBox = styled.div`
  border-radius: 0.375rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  background-color: white;
  span {
    font-size: 0.75rem;
    line-height: 1rem;
    margin-top: 1rem;
    color: rgb(156 163 175);
  }
`;

export const CancelBtn = styled.button`
  top: 1rem;
  right: 1rem;
  position: absolute;
  cursor: pointer;
  border: none;
  background-color: white;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    vertical-align: middle;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  h1 {
    color: rgb(27 23 60);
    line-height: 39px;
    font-size: 26px;
    margin: 0;
  }
`;

export const InputBox = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  margin-bottom: 1.5rem;
  input {
    margin: 0px auto;
    width: 75%;
    padding: 1rem 2rem 1rem 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }

  button {
    padding: 1rem 2rem 1rem 2rem;
    border-width: 2px;
    border-radius: 9999px;
    cursor: pointer;
    font-size: 100%;
    margin: 0;
    background-color: white;
  }
`;
