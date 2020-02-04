import React from 'react';
import styled from 'styled-components';
import Score from './Score';

const LeaderBoardContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LeaderBoard: React.FC = () => {
  return (
    <LeaderBoardContainer>
      <h2>
        <span role="img" aria-label="Trophy emoji">
          🏆
        </span>{' '}
        Leaders board{' '}
        <span role="img" aria-label="Trophy emoji">
          🏆
        </span>
      </h2>
      <Score name="Pierre" timeElapsed="00:02:00" rank={1} />
      <Score name="Pierre" timeElapsed="00:03:00" rank={2} />
      <Score name="Pierre" timeElapsed="00:04:00" rank={3} />
      <Score name="Pierre" timeElapsed="00:05:00" rank={4} />
      <Score name="Pierre" timeElapsed="00:06:00" rank={5} />
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;
