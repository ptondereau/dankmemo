import React from 'react';
// @ts-ignore
import makeInspectable from 'mobx-devtools-mst';
import { GameStore } from '../stores/GameStore';

export const GameContext = React.createContext(
  makeInspectable(new GameStore())
);
