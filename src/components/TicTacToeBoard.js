import React from "react";
import Block from "./Block";

const TicTacToeBoard = () => {
  return (
    <div className="grid grid-cols-3 w-80 h-80 border-4">
      <Block value={"X"} />
      <Block value={"O"} />
      <Block value={"X"} />
      <Block value={"O"} />
      <Block value={"X"} />
      <Block value={"O"} />
      <Block value={"X"} />
      <Block value={"O"} />
      <Block value={"X"} />
    </div>
  );
};

export default TicTacToeBoard;
