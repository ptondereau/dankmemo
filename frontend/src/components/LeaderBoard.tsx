import React, { useEffect } from 'react';
import styled from 'styled-components';
import Score from './Score';
import { useTopScoresLazyQuery } from '../graphql/components';

const LeaderBoardContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LeaderBoard: React.FC = () => {
  const [scores, { loading, data }] = useTopScoresLazyQuery();

  useEffect(() => {
    scores();
  }, [scores]);

  if (loading) {
    return null;
  }

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
      {data &&
        data.scores?.edges?.map((score, index) => {
          if (score) {
            // @ts-ignore
            return (
              <Score
                key={index}
                name={score.node?.author}
                timeElapsed={score.node?.elapsedTime}
                rank={index + 1}
              />
            );
          }
        })}
    </LeaderBoardContainer>
  );
};

export default LeaderBoard;
