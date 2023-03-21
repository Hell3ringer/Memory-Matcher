import { useState } from "react";
import { useRef } from "react";
import "../styles/Gameboard.css";
import { Card, Level } from "../types/types";

const cardSelection = (
  cards: Card[],
  //   setCards: Function,
  selectedCards: React.MutableRefObject<number[] | null>,
  index: number
): any => {
  let selectedCardsClosure: number[] = [];
  let cardsClosure: Card[] = cards;
  if (selectedCards.current) selectedCardsClosure = selectedCards.current;

  if (!selectedCardsClosure.length) {
    selectedCardsClosure.push(index);
    selectedCards.current = selectedCardsClosure;
    return cardsClosure;
  }
  selectedCardsClosure.push(index);

  const firstIndex = selectedCardsClosure[0];
  const secondIndex = selectedCardsClosure[1];

  if (cardsClosure[firstIndex].value === cardsClosure[secondIndex].value) {
    cardsClosure[firstIndex].success = true;
    cardsClosure[secondIndex].success = true;
  }
  //   selectedCardsClosure = [];
  selectedCards.current = [];
  //   setCards([...cardsClosure]);
  return cardsClosure;
};

// This function generates an array of cards based on the given level of difficulty
const generateCards = (level: string): Card[] => {
  let n: number;
  let cards: Card[] = [];

  switch (
    level // A switch case statement to set the value of n based on the level of difficulty
  ) {
    case Level.easy:
      n = 12;
      break;
    case Level.medium:
      n = 20;
      break;
    case Level.hard:
      n = 28;
      break;

    default: // default case
      // If the level doesn't match, set n to 0
      n = 0;
      break;
  }

  // Generate array with values from 1 to n
  // add each value twice
  for (let i: number = 1; i <= n / 2; i++) {
    cards.push({ value: i, success: false });
    cards.push({ value: i, success: false });
  }

  // Shuffle array using Fisher-Yates algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index starting from 0 upto the current index.
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements at those two indices such that we shuffle the array randomly.
  }
  return cards; // return the array of shuffled cards.
};

const Gameboard = (props: any) => {
  const [cards, setCards] = useState<Card[]>(generateCards(props.level));

  const selectedCards = useRef<number[] | null>([]);

  return (
    <div className="gameboard">
      <div className={`grid-container grid-${props.level}`}>
        {cards &&
          cards.map((card: Card, index) => {
            return (
              <div
                key={index}
                className={`grid-item ${
                  card.success ? "grid-item-success" : ""
                }`}
                onClick={() =>
                  setCards([...cardSelection(cards, selectedCards, index)])
                }
              >
                {card.value}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gameboard;
