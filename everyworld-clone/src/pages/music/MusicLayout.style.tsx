import styled from 'styled-components';

export const Wrap = styled.div`
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8rem;
  padding-bottom: 8rem;
  gap: 5rem;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionTitle = styled.section`
  flex-direction: column;
  width: 20%;
  max-width: 300px;
  display: flex;
  h1 {
    line-height: 48px;
    font-size: 40px;
    color: white;
  }
`;

export const SectionGird = styled.section`
  width: 80%;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  button {
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 320px;
    cursor: pointer;
    font-size: 100%;
    margin: 0;
    padding: 0;
    transition: transform 0.2s;
    &:hover {
      transform: translate(0, -10px);
    }
  }
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

export const ImgWrap = styled.div`
  object-position: center;
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  cursor: pointer;
`;
