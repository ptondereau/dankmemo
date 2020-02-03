import React from 'react';
import styled, { keyframes } from 'styled-components';
import mememan from '../assets/images/meme-man.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  max-height: 40vh;
  padding-top: 10vh;
`;

const MemeManAnimation = keyframes`
    0% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(10deg);
    }
`;

const MemeMan = styled.img`
  height: 150px;
  animation: ${MemeManAnimation} 4s ease-in-out infinite;
`;

const HeaderTitle = styled.h1`
  padding: 0 30px 0 30px;
  font-size: 4em;
  color: #ffffff;
  text-shadow: #fff 0 0 5px, #fff 0 0 10px, #fff 0 0 15px, #ff2d95 0 0 20px,
    #ff2d95 0 0 30px, #ff2d95 0 0 40px, #ff2d95 0 0 50px, #ff2d95 0 0 75px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <MemeMan src={mememan} alt="Meme man logo" />
      <HeaderTitle>Dank Memo</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
