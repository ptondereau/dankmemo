import React, {useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import GameBoard from './GameBoard';
import LeaderBoard from "./LeaderBoard";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: stretch;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(#e66465, #9198e5);
`;

const App: React.FC = () => {
  const [isGameStarted] = useState(false);

  return (
    <AppContainer>
      <Header />
      {isGameStarted && <GameBoard />}
      {!isGameStarted && <LeaderBoard />}
    </AppContainer>
  );
};

export default App;
