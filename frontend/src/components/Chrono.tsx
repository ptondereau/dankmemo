import React from 'react';
import Timer from 'react-compound-timer';
import styled from 'styled-components/macro';
import { observer } from 'mobx-react-lite';
import useGameStore from '../hooks/useGameStore';

const ChronoContainer = styled.div`
  padding-bottom: 50px;
  font-size: 2em;
`;

const Chrono: React.FC = () => {
  const { setElapsedTime, isStarted } = useGameStore();

  return (
    <ChronoContainer>
      <Timer
        initialTime={0}
        lastUnit="m"
        formatValue={value => `${value < 10 ? `0${value}` : value}`}
      >
        {({ getTime, stop }: { getTime: () => number; stop: () => void }) => {
          setElapsedTime(getTime());

          if (!isStarted) {
            stop();
          }

          return (
            <>
              <span role="img" aria-label="Timer emoji">
                ⏱️
              </span>{' '}
              <Timer.Minutes />:<Timer.Seconds />
            </>
          );
        }}
      </Timer>
    </ChronoContainer>
  );
};

export default observer(Chrono);
