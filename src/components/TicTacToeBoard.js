import React, { useState } from "react";
import Block from "./Block";
import checkWinner from "../functions/checkWinner";
import RefreshIcon from "./RefreshIcon";

const TicTacToeBoard = () => {
  const [blocks, setBlocks] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [win, setWin] = useState([]);

  const handleClick = (i) => {
    // Check if win or already clicked
    if (win.length > 0 || blocks[i] === "X" || blocks[i] === "O") {
      return;
    }

    // If clicked first time
    blocks[i] = isX ? "X" : "O";
    setBlocks(blocks);
    setIsX(!isX);
    setWin(checkWinner(blocks));
  };

  //reset the board
  const handleRestart = () => {
    setIsX(true);
    setBlocks(Array(9).fill(null));
    setWin([]);
  };

  return (
    <div>
      <div className="grid grid-cols-3 rounded-lg   border-4">
        {blocks.map((block, i) => (
          <Block key={i} value={{ block, i }} handleClick={handleClick} />
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="text-2xl font-mono text-white">
          {win.length > 0 ? (
            <span className="text-green-400 font-bold">{`Winner: ${
              isX ? "O" : "X"
            }`}</span>
          ) : (
            <span>{`Next Turn: ${isX ? "X" : "O"}`}</span>
          )}
        </div>
        <div>
          <button
            className="bg-red-500 text-white p-2 rounded-full"
            onClick={handleRestart}
          >
            <RefreshIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeBoard;
