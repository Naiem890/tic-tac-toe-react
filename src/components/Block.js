import React from "react";

const Block = ({ value, handleClick }) => {
  return (
    <div
      className="border-4 h-24 hover:bg-gray-700 hover:cursor-pointer w-24 border-collapse flex justify-center items-center font-bold font-mono text-white text-6xl"
      onClick={() => handleClick(value.i)}
    >
      {value.block}
    </div>
  );
};

export default Block;
