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
  border-bottom-width: 1px;
  margin-top: 2.5rem;
`;

export const ListSection = styled.section`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
  gap: 1.5rem;
  display: grid;
  margin-top: 1.5rem;
  z-index: 1;
  position: relative;
`;
