import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { memo } from "react";

const Card = memo(({ poke }) => {
  const navigate = useNavigate();
  console.log(`card render`, poke.id);

  return (
    <section
      className="w-[150px] h-[180px] m-3 bg-[#ffffff57] rounded-3xl flex flex-col justify-center items-center hover:scale-[1.1] hover:drop-shadow-[0_0_50px_rgba(225,225,225,0.8)] hover:duration-300"
      onClick={() => navigate(`/detail/${poke.id}`)}
    >
      <img className="scale-150 p-4 pointer-events-none" src={poke.front} />
      <h2>
        {poke.name} <FavoriteButton pokeId={poke.id} />
      </h2>
    </section>
  );
});

export default Card;
