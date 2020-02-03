import React from 'react';
import styled from 'styled-components';
import Card from "./Card";

const GameBoardContainer = styled.div`
  height: 70vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const CardsContainer = styled.div`
    width: calc(100vw - (16 * 12));
    height: calc(100vh - (16 * 12));
    margin: 16 * 6;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 16px;

    @media screen and (max-width: 450px) and (min-height: 650px) {
        grid-template-columns: repeat(4, auto);
        grid-template-rows: repeat(5, 1fr);
    }

    @media screen and (min-width: 1400px) and (max-height: 800px) {
        grid-template-columns: repeat(9, auto);
        grid-template-rows: repeat(2, 1fr);
    }
    @media screen and (min-width: 600px) and (max-height: 500px) {
        grid-template-columns: repeat(9, auto);
        grid-template-rows: repeat(2, 1fr);
    }

    @include media-breakpoint-down(md) {
        width: calc(100vw - (16 * 2));
        height: calc(100vh - (16 * 2));
        margin: 16px;
        grid-gap: 16 / 2;
    }
`;

const GameBoard: React.FC = () => {
  return <GameBoardContainer>
       <CardsContainer>
          <Card />
      </CardsContainer>
  </GameBoardContainer>;
};

export default GameBoard;
