"use client";

import FavoriteButton from "@/component/FavoriteButton";
import FlipCard from "@/component/FlipCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const res = await fetch(`/api/pokemon/${id}`);
        const data = await res.json();
        setPoke(data);
      } catch (error) {
        console.error(`데이터를 받아오지 못했습니다.`);
      }
    };

    if (id) {
      fetchPoke();
    }
  }, [id]);
  console.log(poke);

  return (
    <div className="w-screen h-[calc(100vh-150px)] pt-[200px] flex justify-center items-center">
      <div className="max-w-[300px] h-[450px] bg-[#ffffff76] rounded-[30px] p-[20px] flex flex-col flex-wrap justify-center items-center gap-2">
        <h2 className="text-3xl font-bold">
          {poke && poke.name} <FavoriteButton pokeId={Number(id)} />
        </h2>
        <p className="text-[18px]">{poke && poke.description}</p>
        <FlipCard pokemon={poke} />
      </div>
    </div>
  );
}
