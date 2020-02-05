import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Card from './Card';
import useGameStore from '../hooks/useGameStore';
import { observer } from 'mobx-react-lite';
import { useSaveScoreMutation } from '../graphql/components';
import Chrono from './Chrono';

const GameBoardContainer = styled.div`
  min-height: 500px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: center;
  align-content: center;
`;

const GameBoard: React.FC = () => {
  const {
    cards,
    firstCard,
    elapsedTime,
    toggleStarted,
    secondCard,
    setCardCanFlip,
    setCardFlipped,
    setFirstSelectedCard,
    setSecondSelectedCard,
  } = useGameStore();

  const [createScore] = useSaveScoreMutation();

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
    // Si on a 2 cartes retournees, on regarde si c'est une paire.
    if (firstCard && secondCard) {
      firstCard.imageSrc === secondCard.imageSrc
        ? onSuccessGuess()
        : onFailureGuess();

      // on regarde si le joueur a fini la parti lorsque les 20 cartes sont retournees.
      if (cards.filter(card => !card.flipped).length === 20) {
        // on stop le chrono
        toggleStarted();

        // on demande le pseudo
        const author = window.prompt(
          'Felicitations ! Entrer votre pseudo pour figurer sur le leaders board :'
        );

        // on envoi le score a l'API
        createScore({
          variables: {
            score: {
              author: author || `user${Math.random()}`,
              elapsedTime: String(elapsedTime),
              clientMutationId: null,
            },
          },
        }).then(r => window.location.reload()); // et on rafraichit la page pour recommencer
      }
    }
  });

  return (
    <GameBoardContainer>
      <Chrono />
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
