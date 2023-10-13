import styled from 'styled-components';

export const Wrap = styled.div`
  min-height: 100vh;
  div {
    padding-left: 50px;
    padding-right: 50px;
  }
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
    font-size: 40px;
    color: white;
  }
`;

export const SectionGird = styled.section`
  width: 80%;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  div {
    background-color: grey;
    padding: 155px;
  }
`;
