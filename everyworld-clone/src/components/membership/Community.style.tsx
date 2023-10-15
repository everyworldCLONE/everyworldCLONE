import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

export const LeftDiv = styled.div`
  width: 55%;
  p:first-child {
    font-size: 32px;
  }
`;

export const RightDiv = styled.div`
  width: 45%;
`;

export const DiscordImage = styled.div`
  width: 400px;
  margin: auto;
  border-radius: 15px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: all 0.2s;
  }
  img:hover {
    transform: translateY(-10px);
  }
`;
