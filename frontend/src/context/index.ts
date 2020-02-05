import React from 'react';
import { GameStore } from '../stores/GameStore';

export const GameContext = React.createContext(new GameStore());
