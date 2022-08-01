import React, { useState } from "react";
import Block from "./Block";

const TicTacToeBoard = () => {
  const [blocks, setBlocks] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    // If already clicked
    if (blocks[i] === "X" || blocks[i] === "O") {
      return;
    }

    // If clicked first time
    blocks[i] = isX ? "X" : "O";
    setBlocks(blocks);
    setIsX(!isX);
  };

  return (
    <div className="grid grid-cols-3  border-4">
      {blocks.map((block, i) => (
        <Block key={i} value={{ block, i }} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default TicTacToeBoard;
