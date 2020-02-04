import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Card from './Card';
import useGameStore from '../hooks/useGameStore';
import { observer } from 'mobx-react-lite';

const GameBoardContainer = styled.div`
  min-height: 500px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-content: center;
`;

const GameBoard: React.FC = () => {
  const {
    cards,
    firstCard,
    secondCard,
    setCardCanFlip,
    setCardFlipped,
    setFirstSelectedCard,
    setSecondSelectedCard,
  } = useGameStore();

  const resetFirstAndSecondCards = () => {
    setFirstSelectedCard(null);
    setSecondSelectedCard(null);
  };

  const onSuccessGuess = () => {
    if (firstCard) {
      setCardCanFlip(firstCard.id, false);
      setCardFlipped(firstCard.id, false);
    }

    if (secondCard) {
      setCardCanFlip(secondCard.id, false);
      setCardFlipped(secondCard.id, false);
    }

    resetFirstAndSecondCards();
  };

  const onFailureGuess = () => {
    const firstCardID = firstCard?.id;
    const secondCardID = secondCard?.id;

    if (firstCardID) {
      setTimeout(() => {
        setCardFlipped(firstCardID, true);
      }, 1000);
    }

    if (secondCardID) {
      setTimeout(() => {
        setCardFlipped(secondCardID, true);
      }, 1200);
    }

    resetFirstAndSecondCards();
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      firstCard.imageSrc === secondCard.imageSrc
        ? onSuccessGuess()
        : onFailureGuess();
    }
  });

  console.log(firstCard, secondCard);

  return (
    <GameBoardContainer>
      <CardsContainer>
        {cards.map(card => (
          <Card
            key={card.id.toString()}
            flipped={card.flipped}
            imageSource={card.imageSrc}
            onClick={() => {
              if (!card.canFlip) return;

              if (
                (firstCard && card.id === firstCard.id) ||
                (secondCard && card.id === secondCard.id)
              )
                return;

              setCardFlipped(card.id, false);
              firstCard
                ? setSecondSelectedCard(card)
                : setFirstSelectedCard(card);
            }}
          />
        ))}
      </CardsContainer>
    </GameBoardContainer>
  );
};

export default observer(GameBoard);
