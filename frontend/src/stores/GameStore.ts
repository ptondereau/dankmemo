import { v4String } from 'uuid/interfaces';
import { action, observable } from 'mobx';
import uuid from 'uuid';
// @ts-ignore
import deepcopy from 'deepcopy';
import cards from '../data/cards';

export type CardItem = {
  id: v4String;
  imageSrc: string;
  flipped: boolean;
  canFlip: boolean;
};

export interface GameStoreInitialState {
  readonly cards: CardItem[];
  readonly firstCard: CardItem | null;
  readonly secondCard: CardItem | null;
}

export class GameStore {
  public cards = observable.array<CardItem>([], { deep: false });

  @observable public firstCard: CardItem | null;
  @observable public secondCard: CardItem | null;

  constructor() {
    this.generateGame();
    this.firstCard = null;
    this.secondCard = null;
  }

  protected generateGame = (): void => {
    const generatedCards = this.shuffleArray(cards)
      .slice(0, 20 / 2)
      .map(imageURL => ({
        id: uuid.v4(),
        imageSrc: `/images/cards/${imageURL}`,
        flipped: true,
        canFlip: true,
      }))
      .flatMap(e => [e, { ...deepcopy(e), id: uuid.v4() }]);

    this.cards.replace(this.shuffleArray(generatedCards) as CardItem[]);
  };

  @action
  public setCardFlipped = (cardID: v4String, flipped: boolean): void => {
    this.cards.replace(
      this.cards.map(card => {
        if (card.id !== cardID) return card;
        return { ...card, flipped };
      })
    );
  };

  @action
  public setCardCanFlip = (cardID: v4String, canFlip: boolean): void => {
    this.cards.replace(
      this.cards.map(card => {
        if (card.id !== cardID) return card;
        return { ...card, canFlip };
      })
    );
  };

  @action
  public setFirstSelectedCard = (card: CardItem | null): void => {
    this.firstCard = card;
  };

  @action
  public setSecondSelectedCard = (card: CardItem | null): void => {
    this.secondCard = card;
  };

  protected shuffleArray = (
    array: Array<string | CardItem>
  ): Array<string | CardItem> => {
    return array.sort(() => 0.5 - Math.random());
  };

  public static getInitialState = (): GameStoreInitialState => ({
    cards: [],
    firstCard: null,
    secondCard: null,
  });
}
