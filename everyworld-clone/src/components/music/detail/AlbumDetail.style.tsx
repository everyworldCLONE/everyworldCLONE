import styled from 'styled-components';
import { slideUp } from '../../../globalLayout/GlobalStyle';

export const Wrap = styled.div`
  min-height: 100vh;
  color: white;
  animation: ${slideUp} 0.5s ease-in-out;
`;

export const Container = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
`;

export const AlbumCover = styled.div`
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-bottom: 70px;
  position: relative;
`;

export const AlbumImg = styled.div`
  height: 577px;
  max-width: none;
  width: 58.33333%;
  position: relative;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: cover;
    max-width: 100%;
    display: block;
    vertical-align: middle;
  }
`;

export const AlbumName = styled.div`
  font-size: 200px;
  line-height: 200px;
  text-transform: uppercase;
  top: 10rem;
  right: 0;
  text-align: right;
  position: absolute;
  h2 {
    font-size: 110px;
    line-height: 120px;
    letter-spacing: 8px;
    color: rgb(196 9 255);
    margin: 0;
    font-weight: inherit;
  }
  span {
    display: block;
  }
`;

export const AlbumDetail = styled.div`
  padding-bottom: 5rem;
  padding-top: 2rem;
  gap: 5rem;
  flex-direction: row;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
`;

export const DetailWrap = styled.div`
  width: 50%;
  min-height: 1200px;
  div {
    font-weight: 400;
    margin-bottom: 3rem;
  }
  h3 {
    font-size: 26px;
    line-height: 39px;
  }
  p {
    font-size: 16px;
    margin-top: 1rem;
  }
`;

export const MusicBox = styled.section`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  top: 0;
  right: 0;
  position: relative;
`;

export const MusicWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(38 38 38);
`;

export const BoxHeader = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  h4 {
    letter-spacing: 2px;
    font-size: 23px;
    line-height: 35px;
    margin: 0;
  }
`;

export const PlayBox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
  &:hover {
    background-color: black;
  }
`;

export const PlayWrap = styled.div`
  display: flex;
  align-items: center;
  div {
    gap: 0.5rem;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  img {
    width: 46px;
    height: 46px;
    display: block;
    stroke: white;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    margin-left: 1rem;
  }
`;

export const DetailFooter = styled.section`
  position: relative;
`;

export const DetailFooterImg = styled.div`
  height: 950px;
  width: 100%;
  position: relative;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: cover;
    max-width: 100%;
    display: block;
  }
  div {
    height: 475px;
    display: block;
    opacity: 0.5;
    width: 65vw;
    bottom: 0;
    position: absolute;
    background: linear-gradient(to top, #eecc6b, #c1a0da);
  }
`;

export const FooterSvg = styled.img`
  display: block;
  top: 400px;
  left: 100px;
  position: absolute;
`;
