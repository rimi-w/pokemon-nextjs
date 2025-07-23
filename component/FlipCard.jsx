"use Client";

import { useState } from "react";

const FlipCard = ({ pokemon }) => {
  const [isFlip, setIsFlip] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[150px] h-[150px] m-5">
        {isFlip && (
          <img className="w-[150px] h-[150px] " src={pokemon && pokemon.back} />
        )}
        {!isFlip && (
          <img
            className="w-[150px] h-[150px] "
            src={pokemon && pokemon.front}
          />
        )}
      </div>
      <button
        onClick={() => setIsFlip((prev) => !prev)}
        className="w-13 h-9 bg-[#ff080856] rounded-2xl"
      >
        Flip
      </button>
    </div>
  );
};

export default FlipCard;
