"use client";

import FavoriteButton from "@/component/FavoriteButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const getPokeData = async () => {
      try {
        const res = await fetch(`/api/pokemon`);
        const data = await res.json();
        setPokeData(data);
      } catch (error) {
        console.error(`데이터를 받아오지 못했습니다.`);
      }
    };

    getPokeData();
  }, []);

  if (!pokeData) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-center pt-[80px] m-auto">
      {pokeData.map((poke) => (
        <Link href={`/detail/${poke.id}`}>
          <section
            key={poke.id}
            className="w-[150px] h-[180px] m-3 bg-[#ffffff57] rounded-3xl flex flex-col justify-center items-center hover:scale-[1.1] hover:drop-shadow-[0_0_50px_rgba(225,225,225,0.8)] hover:duration-300"
          >
            <img
              className="scale-150 p-4 pointer-events-none"
              src={poke.front}
            />
            <h2>
              {poke.name} <FavoriteButton pokeId={poke.id} />
            </h2>
          </section>
        </Link>
      ))}
    </div>
  );
}
