import styled from 'styled-components';

export const Wrap = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  color: white;
  position: relative;
`;

export const RightLogo = styled.aside`
  top: 10rem;
  right: 2.5rem;
  bottom: 5rem;
  position: absolute;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    letter-spacing: 8px;
    line-height: 90px;
    font-size: 80px;
    color: rgb(196 9 255);
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const ContentBox = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;

export const MySection = styled.section`
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListHeader = styled.section`
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid white;
  margin-top: 2.5rem;
  div {
    display: flex;
  }
  button {
    letter-spacing: 0.11px;
    line-height: 32px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid white;
    cursor: pointer;
    background-color: transparent;
    color: white;
  }
`;

export const ListSection = styled.section`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  gap: 5rem;
  display: grid;
  margin-top: 1.5rem;
  z-index: 1;
  position: relative;
`;

export const NoNFT = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListFooter = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  color: rgb(160 160 160);
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: rgb(25 25 25);

  margin-top: 15rem;
  div {
    max-width: 1480px;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    width: 70%;
    font-size: 16px;
    margin: 0;
  }
`;
