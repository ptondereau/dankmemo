import React from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import GameBoard from './GameBoard';
import LeaderBoard from './LeaderBoard';
import { observer } from 'mobx-react-lite';
import useGameStore from '../hooks/useGameStore';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: stretch;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(#e66465, #9198e5);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const StartButton = styled.button`
  background: transparent;
  color: #ffffff;
  font-size: 3em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ffffff;
  border-radius: 3px;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;

const App: React.FC = () => {
  const { isStarted, toggleStarted } = useGameStore();

  return (
    <AppContainer>
      <Wrapper>
        <Header />
        {isStarted && <GameBoard />}
        {!isStarted && (
          <>
            <StartButton onClick={toggleStarted}>Start</StartButton>
            <LeaderBoard />
          </>
        )}
      </Wrapper>
    </AppContainer>
  );
};

export default observer(App);
