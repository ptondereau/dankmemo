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
  readonly elapsedTime: number;
  readonly isStarted: boolean;
}

/*
  C'est ici que reside le coeur du jeu. Voyez ca comme un entrepot de donnees partage entre plusieurs composents.
  Une carte possede une URL, une autorisation a pouvoir etre retourne, son etat (retourne ou pas) et un Id unique.
 */
export class GameStore {
  public cards = observable.array<CardItem>([], { deep: false });

  @observable public firstCard: CardItem | null;
  @observable public secondCard: CardItem | null;

  // Le timer de la session de jeu.
  @observable public elapsedTime: number = 0;

  // L'etat de la session de jeu. (demarre ou pas).
  @observable public isStarted: boolean = false;

  constructor() {
    this.generateGame();
    this.firstCard = null;
    this.secondCard = null;
  }

  protected generateGame = (): void => {
    // on genere un tableau d'objet a partir de la liste de carte dispo
    // on le melange
    const generatedCards = this.shuffleArray(cards)
      // on le divise en 2
      .slice(0, 20 / 2)
      // on genere nos objets
      .map(imageURL => ({
        id: uuid.v4(),
        imageSrc: `/images/cards/${imageURL}`,
        flipped: true,
        canFlip: true,
      }))
      // on raccroche le meme tableau d'objet pour avoir 20 cartes mais en le re-melangeant lui aussi,
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

  @action
  public setElapsedTime = (time: number): void => {
    this.elapsedTime = time;
  };

  @action
  public toggleStarted = (): void => {
    this.isStarted = !this.isStarted;
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
    elapsedTime: 0,
    isStarted: false,
  });
}
