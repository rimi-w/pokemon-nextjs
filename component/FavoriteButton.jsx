"use Client";

import { useState } from "react";

const FavoriteButton = ({ pokeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          isFavorite ? setIsFavorite(false) : setIsFavorite(true);
        }}
      >
        {isFavorite ? `❤️` : `🖤`}
      </button>
    </>
  );
};

export default FavoriteButton;
