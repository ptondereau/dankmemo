import React from 'react';
import { GameContext } from '../context';
import { GameStore } from '../stores/GameStore';

const useGameStore = (): GameStore => React.useContext(GameContext);

export default useGameStore;
