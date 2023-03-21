import "../styles/Gameboard.css";
import { Level } from "../types/types";

// This function generates an array of cards based on the given level of difficulty
const generateCards = (level: string): number[] => {
  let n: number; 
  let cards: number[] = []; 
  switch (level) { // A switch case statement to set the value of n based on the level of difficulty
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
      n = 0; // If the level doesn't match, set n to 0
      break;
  }

  // Generate array with values from 1 to n
  // add each value twice
  for (let i: number = 1; i <= n / 2; i++) {
    cards.push(i);
    cards.push(i); 
  }

  // Shuffle array using Fisher-Yates algorithm
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index starting from 0 upto the current index.
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements at those two indices such that we shuffle the array randomly.
  }
  return cards; // return the array of shuffled cards.
};

const Gameboard = (props: any) => {
  let cards: number[] = generateCards(props.level);

  return (
    <div className="gameboard">
      <div className={`grid-container grid-${props.level}`}>
        {cards &&
          cards.map((card, index) => {
            return <div key={index} className='grid-item'>{card}</div>;
          })}
      </div>
    </div>
  );
};

export default Gameboard;
