import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type Props = {
  name: string;
  timeElapsed: string;
  rank: number;
};

const Score: React.FC<Props> = ({ name, rank, timeElapsed }) => {
  return (
    <ScoreContainer>
      <div>{rank}</div>
      <div>{name}</div>
      <div>{timeElapsed}</div>
    </ScoreContainer>
  );
};

export default Score;
