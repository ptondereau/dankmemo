import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const convertToHumanReadable = (ms: number, delimiter = ':'): string => {
  const showWith0 = (value: number) => (value < 10 ? `0${value}` : value);
  const milliseconds = Math.floor((ms % 1000) / 100);
  const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60));
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = showWith0(Math.floor((ms / 1000) % 60));
  return `${
    parseInt(hours as string) ? `${hours}${delimiter}` : ''
  }${minutes}${delimiter}${seconds}.${milliseconds}`;
};

type Props = {
  name: string;
  timeElapsed: number;
  rank: number;
};

const Score: React.FC<Props> = ({ name, rank, timeElapsed }) => {
  return (
    <ScoreContainer>
      <div>{rank}</div>
      <div>{name}</div>
      <div>{convertToHumanReadable(timeElapsed)}</div>
    </ScoreContainer>
  );
};

export default Score;
