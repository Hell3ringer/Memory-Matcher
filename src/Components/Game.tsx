import { Level } from "../types/types";
import Gameboard from "./Gameboard";
// import Login from "./Login";

const Game = () => {
  return (
    <>
      {/* <Login /> */}
      <Gameboard level={Level.easy}/>
    </>
  );
};

export default Game;
