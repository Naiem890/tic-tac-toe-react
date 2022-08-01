import React from "react";

const Block = ({ value }) => {
  return (
    <div className="border-4 border-collapse flex justify-center items-center font-bold font-mono text-white text-6xl">
      {value}
    </div>
  );
};

export default Block;
